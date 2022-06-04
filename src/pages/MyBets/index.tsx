import toast, { Toaster } from 'react-hot-toast';
import { useCallback, useEffect, useState } from 'react';
import { Body } from '../../components/Body';
import { EditBetsModal } from '../../components/EditBetsModal';
import { Title } from '../../components/Title';
import remove from '../../assets/remove.png';
import edit from '../../assets/edit_profile.png';
import {
  ContainerPlays,
  ContainerPlay,
  ContainerButtons,
  Button,
} from './styles';
import { api } from '../../services/api';
import camisa from '../../assets/camisa.png';

interface IPlay {
  id: string;
  value: string;
  type: string;
  play: {
    team_a: string;
    team_b: string;
    result?: string;
  };
}

export function MyBets() {
  const [idPlay, setIdPlay] = useState('');
  const [type, setType] = useState('');
  const [bets, setBets] = useState<IPlay[]>([]);
  const [openEditBetsModal, setOpenEditBetsModal] = useState(false);

  useEffect(() => {
    api.get('/bets').then(response => {
      setBets(response.data);
    });
  }, []);

  const deleteBets = useCallback(async (id: string) => {
    try {
      await api.delete(`/bets/delete/${id}`);

      const playsFilter = bets.filter(play => play.id !== id);

      setBets(playsFilter);
    } catch (error) {
      toast.error('Ocorreu algum erro na deleção da aposta!');
    }
  }, []);

  const handleClosedEditBetsModal = useCallback(async () => {
    setOpenEditBetsModal(false);
  }, []);

  const handleOpenEditBetsModal = useCallback(
    (id: string, type_bets: string) => {
      setIdPlay(id);
      setType(type_bets);
      setOpenEditBetsModal(true);
    },
    [],
  );

  return (
    <Body>
      <Toaster position="top-right" reverseOrder={false} />
      <Title name="Minhas apostas" />
      <ContainerPlays>
        {bets.length > 0 &&
          bets.map(old_bets => (
            <ContainerPlay key={old_bets.id}>
              {old_bets.play.team_a} <img src={camisa} alt="Time A" /> X
              <img src={camisa} alt="Time A" />
              {old_bets.play.team_b}
              <ContainerButtons>
                <ContainerButtons>
                  <Button
                    onClick={() =>
                      handleOpenEditBetsModal(old_bets.id, old_bets.type)
                    }
                  >
                    <img src={edit} alt="Editar" />
                  </Button>
                  <Button onClick={() => deleteBets(old_bets.id)}>
                    <img src={remove} alt="Excluir" />
                  </Button>
                </ContainerButtons>
              </ContainerButtons>
            </ContainerPlay>
          ))}
      </ContainerPlays>
      <EditBetsModal
        id={idPlay}
        type={type}
        is_open={openEditBetsModal}
        on_request_close={handleClosedEditBetsModal}
      />
    </Body>
  );
}
