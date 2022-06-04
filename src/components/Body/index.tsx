import { ReactNode } from 'react';
import { Header } from '../Header';
import { ContainerComponent } from '../ContainerComponent';
import { Container } from './styles';

interface IContainerProps {
  children: ReactNode;
}

export function Body({ children }: IContainerProps) {
  return (
    <ContainerComponent>
      <Header />
      <Container>{children}</Container>
    </ContainerComponent>
  );
}
