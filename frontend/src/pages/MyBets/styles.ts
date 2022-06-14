import styled, { css } from 'styled-components';

interface IProps {
  exists: boolean;
}

export const ContainerPlays = styled.div`
  width: 100%;
`;

export const ContainerPlay = styled.div<IProps>`
  display: flex;
  align-items: center;

  ${props =>
    props.exists
      ? css`
          justify-content: space-around;
        `
      : css`
          justify-content: center;

          .buttons {
            display: none;
          }

          .bets {
            width: 100%;
          }
        `}

  width: 100%;
  border-bottom: 1px solid #ccc;

  padding: 0.5rem;

  gap: 1rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  .bets {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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

export const Button = styled.button`
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
