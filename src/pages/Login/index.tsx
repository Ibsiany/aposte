import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import toast, { Toaster } from 'react-hot-toast';
import { Container, Title, LoginContainer } from './styles'
import { useAuth } from '../../hooks/useAuth';

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { signIn } = useAuth();

    const login = useCallback(async () => {
        try {
            await signIn({
                email,
                password,
              });

            navigate('/auth/dashboard')
        }catch(error){
            console.log(error)
            toast.error('Usuário ou senha incorreto(s)!')
        }
    }, [email, navigate, password, signIn])


    return (
        <Container>
            <Toaster position="top-right" reverseOrder={false} />
            <LoginContainer>
                <Title>Login</Title>          
                <Input type="text" label="E-mail" value={email} setValue={setEmail}/>
                <Input type="password" label="Senha" value={password} setValue={setPassword}/>

                <Button name="Entrar" onClick={login}/>

                <Link to="/create">
                    Cadastre-se
                </Link>
            </LoginContainer>
        </Container>
    )
}