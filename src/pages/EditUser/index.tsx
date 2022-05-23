import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Container, Title, LoginContainer, ContainerBack } from './styles'

export function EditUser(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const createProfile = useCallback(async () => {
        try{
            await api.post('/user/edit', {
                name, 
                email, 
                password
            })
    
            navigate('/auth/dashboard')
        }catch(error){
            toast.error('Ocorreu algum erro na criação do usuário!')
        }
    }, [email, name, navigate, password])

    return (
        <Container>
            <Toaster position="top-right" reverseOrder={false} />
            <LoginContainer>
                <Title>Editar usuário</Title>          
                <Input type="text" label="Nome" value={name} setValue={setName}/>
                <Input type="text" label="* E-mail (confirmação)" value={email} setValue={setEmail}/>
                <Input type="password" label="Senha" value={password} setValue={setPassword}/>

                <Button onClick={createProfile} name="Cadastrar"/>
                <ContainerBack>
                    <Link to='/auth/dashboard'>
                        Voltar
                    </Link>
                </ContainerBack>
            </LoginContainer>
        </Container>
    )
}