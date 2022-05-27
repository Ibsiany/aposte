import styled from 'styled-components'
const fundo = require('../../images/fundo.png')

export const Container = styled.div `
    display: flex;
    flex-direction: column;


    width: 100vw;
    height: 100vh;
    margin: auto;   
    font-family: 'Poppins', sans-serif;

    background-image: url(${fundo});
    background-size: 100% 100%;

`;

export const Title = styled.span `
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
`;

export const Body = styled.div `
`;
 