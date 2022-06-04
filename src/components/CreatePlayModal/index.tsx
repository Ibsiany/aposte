import { useCallback, useState } from 'react';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {
  ModalSchedule,
  Container,
  ContainerClose,
  ButtonClose,
  Image,
  Title,
} from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import close from '../../assets/close.png';

Modal.setAppElement('#root');

interface IModalProps {
  is_open: boolean;
  on_request_close: () => void;
}

export function CreatePlayModal({
  is_open,
  on_request_close,
}: IModalProps): JSX.Element {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');

  const closeModal = useCallback(() => {
    on_request_close();
  }, [on_request_close]);

  const navigate = useNavigate();

  const createPlay = useCallback(async () => {
    try {
      await api.post(`/play/create/`, {
        team_a: teamA,
        team_b: teamB,
      });

      navigate('/');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do jogo!');
    }
  }, [teamA, teamB, navigate]);

  return (
    <Modal
      isOpen={is_open}
      onRequestClose={closeModal}
      style={ModalSchedule}
      closeTimeoutMS={500}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <ContainerClose>
        Criar jogo
        <ButtonClose onClick={closeModal}>
          <Image src={close} alt="Fechar modal" />
        </ButtonClose>
      </ContainerClose>
      <Container>
        <Title>Informe os times: </Title>
        <Input type="text" label="Time A" value={teamA} setValue={setTeamA} />
        <Input type="text" label="Time B" value={teamB} setValue={setTeamB} />

        <Button onClick={createPlay} name="Cadastrar" />
      </Container>
    </Modal>
  );
}
