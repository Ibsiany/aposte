import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title, LoginContainer,NewUser } from './styles'

export function Login(){
    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>          
                <Input type="text" label="E-mail" />
                <Input type="password" label="Senha" />

                <Button name="Entrar"/>

                <NewUser>
                    Cadastre-se
                </NewUser>
            </LoginContainer>
        </Container>
    )
}