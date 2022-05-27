import { Header } from '../../components/Header';
import { Container, Body, ContainerBets } from './styles';

export function MyBets() {
  return (
    <Container>
      <Header />
      <Body>
        <ContainerBets></ContainerBets>
      </Body>
    </Container>
  );
}
