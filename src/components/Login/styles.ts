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
    
    width: 20rem;
    height: 20rem;
    
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #A9A9A9;
    opacity: 0.9;
    
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
    color: #000000;
`;

export const Input = styled.input `
    width: 16rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px #000000 solid;
`;