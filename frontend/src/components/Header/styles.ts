import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;

  height: 8rem;
  left: 0;
  top: 0;
  right: 0;

  background-color: rgba(192, 192, 192, 0.6);

  z-index: 1000;
`;

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  height: 100%;

  gap: 2rem;

  a {
    font-size: 1.3rem;
    font-weight: bold;
    color: #000000;

    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Containerimage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
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
