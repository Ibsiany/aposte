import { useCallback, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title, LoginContainer } from './styles'

export function CreateUser(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createProfile = useCallback(() => {
        console.log('Aqui')
    }, [])

    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>          
                <Input type="text" label="Nome" value={name} setValue={setName}/>
                <Input type="text" label="E-mail" value={email} setValue={setEmail}/>
                <Input type="password" label="Senha" value={password} setValue={setPassword}/>

                <Button onClick={createProfile} name="Cadastrar"/>
            </LoginContainer>
        </Container>
    )
}