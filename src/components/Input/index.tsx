import { Container, Label, InputForms } from "./styles";

interface IInputProps {
    type: string;
    label: string;
}

export function Input({type, label}:IInputProps){
    return (
        <Container>
            <Label>
                {label}:
            </Label>
            <InputForms type={type}/>
        </Container>
    )
}