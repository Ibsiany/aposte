import styled from 'styled-components';

export const ContainerPlays = styled.div`
  width: 100%;
`;

export const ContainerPlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid #ccc;

  padding: 0.5rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  .total {
    margin-left: 10rem;

    gap: 2rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    img {
      :first-child {
        margin-left: 1rem;
      }

      :last-child {
        margin-right: 1rem;
      }
    }
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
