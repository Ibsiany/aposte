import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Container, Body, ContainerBets } from './styles';

export function MyBets() {
  return (
    <Container>
      <Header />
      <Body>
        <ContainerBets>
          <Title name={"Minhas apostas"}/>
        </ContainerBets>
      </Body>
    </Container>
  );
}
