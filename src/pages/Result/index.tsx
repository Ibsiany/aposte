import { ContainerComponent } from '../../components/ContainerComponent';
import { Header } from '../../components/Header';
import { Body } from './styles';

export function Result() {
  return (
    <ContainerComponent>
      <Header />
      <Body>Hello World!</Body>
    </ContainerComponent>
  );
}
