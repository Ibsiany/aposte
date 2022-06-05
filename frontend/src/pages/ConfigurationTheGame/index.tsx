import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { CreatePlayModal } from '../../components/CreatePlayModal';
import { EditPlayModal } from '../../components/EditPlayModal';
import remove from '../../assets/remove.png';
import camisa from '../../assets/camisa.png';
import campo from '../../assets/campo.png';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import {
  ContainerPlays,
  ContainerPlay,
  ButtonDelete,
  ContainerButtons,
} from './styles';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function ConfigurationTheGame() {
  const [plays, setPlays] = useState<IPlay[]>([]);
  const [idPlay, setIdPlay] = useState('');
  const [openCreatePlayModal, setOpenCreatePlayModal] = useState(false);
  const [openEditPlayModal, setOpenEditPlayModal] = useState(false);

  useEffect(() => {
    api.get('/play').then(response => {
      setPlays(response.data);
    });
  }, [openEditPlayModal, openCreatePlayModal]);

  const handleClosedCreatePlayModal = useCallback(async () => {
    setOpenCreatePlayModal(false);
  }, []);

  const handleOpenCreatePlayModal = useCallback(() => {
    setOpenCreatePlayModal(true);
  }, []);

  const handleClosedEditPlayModal = useCallback(async () => {
    setOpenEditPlayModal(false);
  }, []);

  const handleOpenEditPlayModal = useCallback((id: string) => {
    setIdPlay(id);
    setOpenEditPlayModal(true);
  }, []);

  const deletePlay = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/play/delete/${id}`);

        const playsFilter = plays.filter(play => play.id !== id);

        setPlays(playsFilter);
      } catch (error) {
        toast.error('Ocorreu algum erro na deleção do jogo!');
      }
    },
    [plays],
  );

  return (
    <Body>
      <Toaster position="top-right" reverseOrder={false} />
      <Title name="Configuração de partida" />
      <ContainerPlays>
        {plays.length > 0 &&
          plays.map(play => (
            <ContainerPlay key={play.id}>
              <img src={campo} alt="Campo" />
              <div className="play">
                {play.team_a} <img src={camisa} alt="Time A" /> X
                <img src={camisa} alt="Time A" />
                {play.team_b}
              </div>
              <ContainerButtons>
                <Button
                  onClick={() => handleOpenEditPlayModal(play.id)}
                  name="Finalizar"
                  color="red"
                />
                <ButtonDelete onClick={() => deletePlay(play.id)}>
                  <img src={remove} alt="Excluir" />
                </ButtonDelete>
              </ContainerButtons>
            </ContainerPlay>
          ))}
      </ContainerPlays>
      <Button onClick={handleOpenCreatePlayModal} name="Cadastrar" />

      <CreatePlayModal
        is_open={openCreatePlayModal}
        on_request_close={handleClosedCreatePlayModal}
      />

      <EditPlayModal
        id={idPlay}
        is_open={openEditPlayModal}
        on_request_close={handleClosedEditPlayModal}
      />
    </Body>
  );
}
