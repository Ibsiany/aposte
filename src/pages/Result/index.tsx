import { useEffect, useState } from 'react';
import { Body } from '../../components/Body';
import { ContainerPlays, ContainerPlay } from './styles';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import camisa from '../../assets/camisa.png';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function Result() {
  const [plays, setPlays] = useState<IPlay[]>([]);

  useEffect(() => {
    api.get('/play/results').then(response => {
      setPlays(response.data);
    });
  }, []);

  return (
    <Body>
      <Title name="Resultados" />
      <ContainerPlays>
        {plays.length > 0 &&
          plays.map(play => (
            <ContainerPlay key={play.id}>
              {play.team_a} <img src={camisa} alt="Time A" /> X
              <img src={camisa} alt="Time A" />
              {play.team_b} = <img src={camisa} alt="Time A" /> {play.result}
              <img src={camisa} alt="Time A" />
            </ContainerPlay>
          ))}
      </ContainerPlays>
    </Body>
  );
}
