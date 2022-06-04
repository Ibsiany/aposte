import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Body, ContainerBets, ContainerPlays, ContainerPlay } from './styles';
import { ContainerComponent } from '../../components/ContainerComponent';
import { Title } from '../../components/Title';
import { api } from '../../services/api';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function Result() {
  const [plays, setPlays] = useState<IPlay[]>([]);

  useEffect(() => {
    api.get('/play').then(response => {
      setPlays(response.data);
    });
  }, []);

  return (
    <ContainerComponent>
      <Header />
      <Body>
        <ContainerBets>
          <Title name="Resultados" />
          <ContainerPlays>
            {plays.length > 0 &&
              plays.map(play => (
                <ContainerPlay key={play.id}>
                  {play.team_a} X {play.team_b} = {play.result}
                </ContainerPlay>
              ))}
          </ContainerPlays>
        </ContainerBets>
      </Body>
    </ContainerComponent>
  );
}
