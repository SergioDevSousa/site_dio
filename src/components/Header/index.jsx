import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-dio.png';
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';
import { Button } from "../Button";

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };
    const handleCadastro = () => {
        navigate("/cadastro");
    };

    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar ..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" onClick={handleLogin} /> {/* Redireciona ao clicar */}
                    <Button title="Cadastrar" onClick={handleCadastro} /> {/* Redireciona ao clicar */}
                </Row>
            </Container>
        </Wrapper>
    )
}
export { Header }