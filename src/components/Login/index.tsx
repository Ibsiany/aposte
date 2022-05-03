import { Container, Title, LoginContainer, ContainerInput, Label, Input } from './styles'

export function Login(){
    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>
                
                <ContainerInput>
                    <Label>
                        E-mail:
                    </Label>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <Label>
                        Senha:
                    </Label>
                    <Input />
                </ContainerInput>
            </LoginContainer>
        </Container>
    )
}