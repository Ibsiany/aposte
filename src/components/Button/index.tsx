import { Container, ButtonForms } from './styles';

interface IInputProps {
  name: string;
  onClick: () => void;
}

export function Button({ name, onClick }: IInputProps) {
  return (
    <Container>
      <ButtonForms onClick={onClick}>{name}</ButtonForms>
    </Container>
  );
}
