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
                <Link to="/auth/dashboard" id="dashboard">
                    Minhas apostas
                </Link>
                <Link to ='/auth/bets-play' id="play">
                    Apostas no jogo
                </Link>
                <Link to='/auth/bets-score' id="score">
                    Apostas no placar
                </Link>
                <Link to='/auth/result' id="result">
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