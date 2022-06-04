import toast, { Toaster } from 'react-hot-toast';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import remove from '../../assets/remove.png';
import edit from '../../assets/edit_profile.png';
import {
  Body,
  ContainerBets,
  ContainerPlays,
  ContainerPlay,
  ContainerButtons,
  ButtonDelete,
} from './styles';
import { ContainerComponent } from '../../components/ContainerComponent';
import { api } from '../../services/api';

interface IPlay {
  id: string;
  team_a: string;
  team_b: string;
  result?: string;
}

export function MyBets() {
  const [plays, setPlays] = useState<IPlay[]>([]);

  useEffect(() => {
    api.get('/bets').then(response => {
      setPlays(response.data);
    });
  }, []);

  const deleteBets = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/bets/delete/${id}`);

        const playsFilter = plays.filter(play => play.id !== id);

        setPlays(playsFilter);
      } catch (error) {
        toast.error('Ocorreu algum erro na deleção da aposta!');
      }
    },
    [plays],
  );

  return (
    <ContainerComponent>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      <Body>
        <ContainerBets>
          <Title name="Minhas apostas" />
          <ContainerPlays>
            {plays.length > 0 &&
              plays.map(play => (
                <ContainerPlay key={play.id}>
                  {play.team_a} X {play.team_b}
                  <ContainerButtons>
                    <ContainerButtons>
                      <ButtonDelete onClick={() => editBets(play.id)}>
                        <img src={edit} alt="Editar" />
                      </ButtonDelete>
                      <ButtonDelete onClick={() => deleteBets(play.id)}>
                        <img src={remove} alt="Excluir" />
                      </ButtonDelete>
                    </ContainerButtons>
                  </ContainerButtons>
                </ContainerPlay>
              ))}
          </ContainerPlays>
        </ContainerBets>
      </Body>
    </ContainerComponent>
  );
}
