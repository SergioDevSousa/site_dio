import { useNavigate  } from "react-router-dom";
import { MdAccountCircle, MdEmail, MdLock } from "react-icons/md";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../service/api';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';


const Cadastro = () => {
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
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome..." leftIcon={<MdAccountCircle />} name="nome" control={control} />
                {errors.nome && <span>Nome é Obrigatório</span>}
                <Input placeholder="E-mail..." leftIcon={<MdEmail />} name="email" control={control} />
                {errors.email && <span>E-mail é Obrigatório</span>}
                <Input placeholder="Senha" type="password" leftIcon={<MdLock />} name="senha" control={control} />
                {errors.senha && <span>A senha é Obrigatório</span>}
                <Button title="Entrar" variant="secondary" type="submit"/>
              </form>
              <Row>
                <EsqueciText>Já tenho conta</EsqueciText>
                <CriarText>Fazer login</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
        
    </>
  )
}

export default Cadastro;
