import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { ContainerPlays, ContainerPlay, ContainerButtons } from './styles';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import camisa from '../../assets/camisa.png';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function BetsInTheScore() {
  const [plays, setPlays] = useState<IPlay[]>([]);

  useEffect(() => {
    api.get('/bets/score').then(response => {
      setPlays(response.data);
    });
  }, []);

  const createBets = useCallback(async (id: string) => {
    try {
      if (window.confirm('Você tem certeza que deseja realizar essa aposta?')) {
        const { data } = await api.post(`/bets/score/`, {
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
      <Title name="Apostas no placar" />
      <ContainerPlays>
        {plays.length > 0 &&
          plays.map(play => (
            <ContainerPlay key={play.id}>
              {play.team_a} <img src={camisa} alt="Time A" /> X
              <img src={camisa} alt="Time A" />
              {play.team_b}
              <ContainerButtons>
                <Button onClick={() => createBets(play.id)} name="Apostar" />
              </ContainerButtons>
            </ContainerPlay>
          ))}
      </ContainerPlays>
    </Body>
  );
}
