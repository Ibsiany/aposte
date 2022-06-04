import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80vh;
`;

export const ContainerBets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 50%;

  background: #fff;

  border-radius: 0.5rem;

  gap: 2rem;

  padding: 1rem;
`;

export const ContainerPlays = styled.div`
  width: 100%;
`;

export const ContainerPlay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid #ccc;

  padding: 0.5rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  gap: 1rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ButtonDelete = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
  color: #000000;

  border: none;
  background: transparent;

  transform: filter 0.2s;

  :hover {
    color: #b22222;
  }
`;
