import { useCallback, useEffect, useState } from 'react';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { ContainerPlays, ContainerPlay, ContainerButtons } from './styles';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import camisa from '../../assets/camisa.png';
import { CreateBetsModal } from '../../components/CreateBetsModal';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function BetsInTheScore() {
  const [idPlay, setIdPlay] = useState('');
  const [plays, setPlays] = useState<IPlay[]>([]);
  const [openEditBetsModal, setOpenEditBetsModal] = useState(false);

  useEffect(() => {
    api.get('/play').then(response => {
      setPlays(response.data);
    });
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
      <Title name="Apostas no placar" />
      <ContainerPlays>
        {plays.length > 0 &&
          plays.map(play => (
            <ContainerPlay key={play.id}>
              <div className="total">
                <div className="team">
                  {play.team_a} <img src={camisa} alt="Time A" />
                </div>
                X
                <div className="team">
                  <img src={camisa} alt="Time A" />
                  {play.team_b}
                </div>
              </div>
              <ContainerButtons>
                <Button
                  onClick={() => handleOpenEditBetsModal(play.id)}
                  name="Apostar"
                />
              </ContainerButtons>
            </ContainerPlay>
          ))}
        <CreateBetsModal
          id={idPlay}
          type="score"
          is_open={openEditBetsModal}
          on_request_close={handleClosedEditBetsModal}
        />
      </ContainerPlays>
    </Body>
  );
}
