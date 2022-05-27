import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  ContainerPage,
  Containerimage,
  Image,
  ContainerButtons,
  Button,
} from './styles';
const logo = require('../../images/logo.jpeg');
const Edit = require('../../images/edit_profile.png');
const logout = require('../../images/logout.png');

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Containerimage>
        <Image src={logo} alt="logo" />
      </Containerimage>
      <ContainerPage>
        <Link to="/auth/dashboard" id="dashboard">
          Minhas apostas
        </Link>
        <Link to="/auth/bets-play" id="play">
          Apostas no jogo
        </Link>
        <Link to="/auth/bets-score" id="score">
          Apostas no placar
        </Link>
        <Link to="/auth/result" id="result">
          Resultados
        </Link>
        <Link to="/auth/setting" id="setting">
          Configuração de partida
        </Link>
      </ContainerPage>
      <ContainerButtons>
        <Link to="/auth/edit-user" id="result">
          <img src={Edit} alt="Editar perfil" />
        </Link>
        <Button onClick={signOut}>
          <img src={logout} alt="Sair" />
        </Button>
      </ContainerButtons>
    </Container>
  );
}
