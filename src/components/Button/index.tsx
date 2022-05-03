import { Container, ButtonForms } from "./styles";

interface IInputProps {
    name: string;
}

export function Button({ name}:IInputProps){
    return (
        <Container>
            <ButtonForms>
                {name}
            </ButtonForms>
        </Container>
    )
}