import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';
import {
  ModalSchedule,
  Container,
  ContainerClose,
  ButtonClose,
  Image,
  Title
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';
import { Button } from '../Button';
const close = require('../../images/close.png')

Modal.setAppElement('#root');

interface IModalProps {
  is_open: boolean;
  on_request_close: () => void;
}

export const DeleteUserModal: React.FC<IModalProps> = ({
  is_open,
  on_request_close,
}) => {
  const [email, setEmail] = useState('');

  const closeModal = useCallback(() => {
    on_request_close();
  }, [on_request_close]);


  const navigate = useNavigate();

  const deleteProfile = useCallback(async () => {
    try{
        await api.delete(`/user/delete/${email}`)

        navigate('/')
    }catch(error){
        toast.error('Ocorreu algum erro na deleção do usuário!')
    }
}, [email, navigate])

  return (
    <Modal
      isOpen={is_open}
      onRequestClose={closeModal}
      style={ModalSchedule}
      closeTimeoutMS={500}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <ContainerClose>
        Deletar usuário
        <ButtonClose onClick={closeModal}>
          <Image src={close} alt="Fechar modal" />
        </ButtonClose>
      </ContainerClose>
      <Container>
          <Title>Confirme o email para deletar o usuário</Title>         
          <Input type="text" label="Email" value={email} setValue={setEmail}/>

          <Button onClick={deleteProfile} name="Excluir"/>
      </Container>
    </Modal>
  );
};
