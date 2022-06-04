import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { DeleteUserModal } from '../../components/DeleteUserModal';
import remove from '../../assets/remove.png';
import {
  Container,
  Title,
  LoginContainer,
  ContainerBack,
  ButtonDelete,
} from './styles';

export function EditUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

  const navigate = useNavigate();

  const handleCloseDeleteUserModal = useCallback(async () => {
    setOpenDeleteUserModal(false);
  }, []);

  const handlOpenDeleteUserModal = useCallback(() => {
    setOpenDeleteUserModal(true);
  }, []);

  const editProfile = useCallback(async () => {
    try {
      await api.patch('/user/edit', {
        name,
        email,
        password,
      });

      navigate('/auth/dashboard');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do usuário!');
    }
  }, [email, name, navigate, password]);

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <LoginContainer>
        <Title>Editar usuário</Title>
        <Input type="text" label="Nome" value={name} setValue={setName} />
        <Input
          type="text"
          label="* E-mail (confirmação)"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          label="Senha"
          value={password}
          setValue={setPassword}
        />

        <Button onClick={editProfile} name="Salvar" />

        <ContainerBack>
          <ButtonDelete onClick={handlOpenDeleteUserModal}>
            <img src={remove} alt="Sair" />
          </ButtonDelete>

          <Link to="/auth/dashboard">Voltar</Link>
        </ContainerBack>

        <DeleteUserModal
          is_open={openDeleteUserModal}
          on_request_close={handleCloseDeleteUserModal}
        />
      </LoginContainer>
    </Container>
  );
}
