import styled from 'styled-components';

export const ModalSchedule = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    width: '30rem',
    height: '25rem',
    margin: 'auto',
    padding: '0',
    border: 'none',
    background: '#e5e5e5',
  },
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: calc(100% - 2.5rem);

  margin: auto;

  gap: 2rem;
  background: #e4e4e4;
`;

export const Title = styled.span `
    font-size: 1.2rem;
    font-weight: bold;
    color: #000000;
`;

export const ContainerClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.5rem;

  background: green;
  padding: 0.5rem;

  color: #fff;

  img {
        background: transparent;
        width: 2rem;
        height: 2rem;
  }
`;

export const Image = styled.img`
  margin-top: 0.5rem;
  padding: 0;
`;

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
`;

