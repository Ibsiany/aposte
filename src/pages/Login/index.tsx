import { useCallback, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title, LoginContainer,NewUser } from './styles'

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = useCallback(() => {
        console.log('Aqui logando')
    }, [])


    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>          
                <Input type="text" label="E-mail" value={email} setValue={setEmail}/>
                <Input type="password" label="Senha" value={password} setValue={setPassword}/>

                <Button name="Entrar" onClick={login}/>

                <NewUser href="/create">
                    Cadastre-se
                </NewUser>
            </LoginContainer>
        </Container>
    )
}