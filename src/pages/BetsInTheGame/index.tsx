import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { ContainerPlays, ContainerPlay, ContainerButtons } from './styles';
import { Title } from '../../components/Title';
import { api } from '../../services/api';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function BetsInTheGame() {
  const [plays, setPlays] = useState<IPlay[]>([]);

  useEffect(() => {
    api.get('/bets/play').then(response => {
      setPlays(response.data);
    });
  }, []);

  const createBets = useCallback(async (id: string) => {
    try {
      if (window.confirm('Você tem certeza que deseja realizar essa aposta?')) {
        const { data } = await api.post(`/bets/play/`, {
          id,
        });

        setPlays([...plays, data]);
      }
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do jogo!');
    }
  }, []);

  return (
    <Body>
      <Toaster position="top-right" reverseOrder={false} />
      <Title name="Partidas de hoje" />
      <ContainerPlays>
        {plays.length > 0 &&
          plays.map(play => (
            <ContainerPlay key={play.id}>
              {play.team_a} X {play.team_b}
              <ContainerButtons>
                <Button onClick={() => createBets(play.id)} name="Apostar" />
              </ContainerButtons>
            </ContainerPlay>
          ))}
      </ContainerPlays>
    </Body>
  );
}
