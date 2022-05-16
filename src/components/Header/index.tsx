import { Link } from "react-router-dom";
import { Container, ContainerPage, Containerimage, Image, ContainerLogout,Button } from "./styles";
const logo = require('../../images/logo.jpeg')

export function Header(){
    return (
        <Container>
            <Containerimage>
                <Image src={logo} alt="logo" />
            </Containerimage>
            <ContainerPage>
                <Link to="/dashboard">
                    Minhas apostas
                </Link>
                <Link to ='/bets-play'>
                    Apostas no jogo
                </Link>
                <Link to='/bets-score'>
                    Apostas no placar
                </Link>
                <Link to='/result'>
                    Resultados
                </Link>
            </ContainerPage>
            <ContainerLogout>
                <Button>
                    Sair
                </Button>
            </ContainerLogout>
        </Container>
    )
}