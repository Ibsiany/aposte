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

Modal.setAppElement('#root');

interface IModalProps {
  id: string;
  is_open: boolean;
  on_request_close: () => void;
}

interface IBets {
  id: string;
  value: string;
  type: string;
  play: {
    team_a: string;
    team_b: string;
    result?: string;
  };
  id_play: string;
}

export function EditBetsModal({
  id,
  is_open,
  on_request_close,
}: IModalProps): JSX.Element {
  const [bets, setBets] = useState<IBets>({} as IBets);
  const [value, setValue] = useState('');

  useEffect(() => {
    api.get(`/bets/${id}`).then(response => {
      setBets(response.data);
    });
  }, [id]);

  const closeModal = useCallback(() => {
    on_request_close();
  }, [on_request_close]);

  const navigate = useNavigate();

  const editBets = useCallback(async () => {
    try {
      await api.post(`/bets/${bets.type}/edit/`, {
        value,
        id,
      });

      navigate('/auth/dashboard');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação da aposta!');
    }
  }, [bets.type, id, navigate, value]);

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

        {bets.type === 'JOGO' ? (
          <select
            className="select"
            name="result"
            onChange={handleSelectChange}
          >
            <option>Selecione uma opção</option>
            <option>{bets.play.team_a}</option>
            <option>{bets.play.team_b}</option>
          </select>
        ) : (
          <Input
            type="text"
            label="Valor da aposta"
            value={value}
            setValue={setValue}
          />
        )}

        <Button onClick={editBets} name="Apostar" />
      </Container>
    </Modal>
  );
}
