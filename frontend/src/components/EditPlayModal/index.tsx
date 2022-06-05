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
  id: string;
  is_open: boolean;
  on_request_close: () => void;
}

export function EditPlayModal({
  id,
  is_open,
  on_request_close,
}: IModalProps): JSX.Element {
  const [result, setResult] = useState('');

  const closeModal = useCallback(() => {
    on_request_close();
  }, [on_request_close]);

  const navigate = useNavigate();

  const createPlay = useCallback(async () => {
    try {
      await api.patch(`/play/edit/`, {
        result: result.toLowerCase(),
        id,
      });

      navigate('/auth/result');
    } catch (error) {
      toast.error('Ocorreu algum erro na edição do jogo!');
    }
  }, [id, navigate, result]);

  return (
    <Modal
      isOpen={is_open}
      onRequestClose={closeModal}
      style={ModalSchedule}
      closeTimeoutMS={500}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <ContainerClose>
        Finalizar jogo
        <ButtonClose onClick={closeModal}>
          <Image src={close} alt="Fechar modal" />
        </ButtonClose>
      </ContainerClose>
      <Container>
        <Title>Informe o resultado: </Title>
        <Input
          type="text"
          label="Resultado"
          value={result}
          setValue={setResult}
        />

        <Button onClick={createPlay} name="Finalizar partida" />
      </Container>
    </Modal>
  );
}
