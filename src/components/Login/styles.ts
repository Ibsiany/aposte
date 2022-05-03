import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    width: 100vw;
    height: 100vh;
    margin: auto;   
    background: green;
    font-family: 'Poppins', sans-serif;
`;

export const Title = styled.span `
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
`;


export const LoginContainer = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: 30rem;
    height: 20rem;
    
    border-radius: 0.5rem;
    padding: 1rem;
    background: #A9A9A9;
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    gap: 1.5rem;
`;

export const ContainerInput = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const Label = styled.label `
    font-size: 1rem;
    font-weight: 300;
    color: #000000;
`;

export const Input = styled.input `
    width: 16rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px #000000 solid;

    width: 25rem;
    height: 2.5rem;

    padding: 0.25rem;

    background: #C5C0C0;
    border-radius: 0.25rem;
`;