import styled from 'styled-components';
import fundo from '../../assets/fundo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: 'Poppins', sans-serif;

  background-image: url(${fundo});
  background-size: 100% 100%;
`;
