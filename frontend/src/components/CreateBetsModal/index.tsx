import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import { useAuth } from '../../hooks/useAuth';

Modal.setAppElement('#root');

interface IModalProps {
  id: string;
  type: string;
  is_open: boolean;
  on_request_close: () => void;
}

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function CreateBetsModal({
  id,
  is_open,
  on_request_close,
  type,
}: IModalProps): JSX.Element {
  const [play, setPlay] = useState<IPlay>({} as IPlay);
  const [value, setValue] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    api.get(`/play/${id}`).then(response => {
      setPlay(response.data);
    });
  }, [id]);

  const closeModal = useCallback(() => {
    on_request_close();
  }, [on_request_close]);

  const navigate = useNavigate();

  const createPlay = useCallback(async () => {
    try {
      await api.post(`/bets/${type}/create/`, {
        value,
        id_user: user.user.id,
        id_play: id,
      });

      navigate('/auth/dashboard');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação da aposta!');
    }
  }, [id, navigate, type, user, value]);

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const element = event.target;

    setValue(element.value);
  }

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

        {type === 'play' ? (
          <select
            className="select"
            name="result"
            onChange={handleSelectChange}
          >
            <option>Selecione uma opção</option>
            <option>{play.team_a}</option>
            <option>{play.team_b}</option>
          </select>
        ) : (
          <Input
            type="text"
            label="Valor da aposta"
            value={value}
            setValue={setValue}
          />
        )}

        <Button onClick={createPlay} name="Apostar" />
      </Container>
    </Modal>
  );
}
