import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../service/api';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';


const Login = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
});

const onSubmit = async (formData) => {
    console.log(formData)
    try{
        const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
        
        if(data.length && data[0].id){
            navigate('/feed') 
            return
        }

        alert('Usuário ou senha inválido')
    }catch(e){
      console.error('Erro ao tentar logar', e);
      alert('Erro ao tentar logar');
    }
};

  return (
    <>
        <Header />
        <Container>
          <Column>
            <Title>
              A plataforma para você aprender com expert, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="E-mail..." leftIcon={<MdEmail />} name="email" control={control} />
                {errors.email && <span>E-mail é Obrigatório</span>}
                <Input placeholder="Senha" type="password" leftIcon={<MdLock />} name="senha" control={control} />
                {errors.senha && <span>A senha é Obrigatório</span>}
                <Button title="Entrar" variant="secondary" type="submit"/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
        
    </>
  )
}

export default Login;
