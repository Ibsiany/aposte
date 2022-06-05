import toast, { Toaster } from 'react-hot-toast';
import { useCallback, useEffect, useState } from 'react';
import { Body } from '../../components/Body';
import { EditBetsModal } from '../../components/EditBetsModal';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import remove from '../../assets/remove.png';
import edit from '../../assets/edit_profile.png';
import camisa from '../../assets/camisa.png';
import {
  ContainerPlays,
  ContainerPlay,
  ContainerButtons,
  Button,
} from './styles';

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

export function MyBets() {
  const [idPlay, setIdPlay] = useState('');
  const [bets, setBets] = useState<IBets[]>([]);
  const [openEditBetsModal, setOpenEditBetsModal] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    api.get(`/bets/user/${user.user.id}`).then(response => {
      setBets(response.data);
    });
  }, [user]);

  const deleteBets = useCallback(async (id: string) => {
    try {
      if (window.confirm('Você tem certeza que deseja excluir essa aposta?')) {
        await api.delete(`/bets/delete/${id}`);

        const playsFilter = bets.filter(old_bets => old_bets.id !== id);

        setBets(playsFilter);
      }
    } catch (error) {
      toast.error('Ocorreu algum erro na deleção da aposta!');
    }
  }, []);

  const handleClosedEditBetsModal = useCallback(async () => {
    setOpenEditBetsModal(false);
  }, []);

  const handleOpenEditBetsModal = useCallback((id: string) => {
    setIdPlay(id);
    setOpenEditBetsModal(true);
  }, []);

  return (
    <Body>
      <Toaster position="top-right" reverseOrder={false} />
      <Title name="Minhas apostas" />
      <ContainerPlays>
        {bets.length > 0 &&
          bets.map(old_bets => (
            <ContainerPlay key={old_bets.id}>
              <div className="bets">
                {old_bets.play.team_a} <img src={camisa} alt="Time A" /> X
                <img src={camisa} alt="Time A" />
                {old_bets.play.team_b} = <img src={camisa} alt="Time A" />{' '}
                {old_bets.value}
              </div>
              <ContainerButtons>
                <ContainerButtons>
                  <Button onClick={() => handleOpenEditBetsModal(old_bets.id)}>
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
        is_open={openEditBetsModal}
        on_request_close={handleClosedEditBetsModal}
      />
    </Body>
  );
}
