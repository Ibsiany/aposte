import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Body, ContainerBets } from './styles';
import { ContainerComponent } from '../../components/ContainerComponent';

export function MyBets() {
  return (
    <ContainerComponent>
      <Header />
      <Body>
        <ContainerBets>
          <Title name="Minhas apostas" />
        </ContainerBets>
      </Body>
    </ContainerComponent>
  );
}
