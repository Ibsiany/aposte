import styled from 'styled-components';
import fundo from '../../assets/fundo.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: 'Poppins', sans-serif;

  background-image: url(${fundo});
  background-size: 100% 100%;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 30rem;
  height: 28rem;

  border-radius: 0.5rem;
  padding: 1rem;
  background-color: rgba(192, 192, 192, 0.6);
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  gap: 1rem;
`;

export const ContainerBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: underline;
    border: none;
    background: transparent;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;

    color: #0000ff;
  }
`;

export const ButtonDelete = styled.button`
  border: none;
  background: transparent;

  img {
    background: transparent;
    width: 2rem;
    height: 2rem;
  }
`;
