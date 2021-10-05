import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin-right:auto;
    p {
        width:clamp(280px, 80%, 600px);
        
    }
`;

export const SearchMusic = styled.div`
display:flex;
width:clamp(220px, 100%, 400px);
margin-top:20px;

button {
    height:42px;
    width:42px;

    background-color: var(--orange);
    border:1px solid var(--orange);
    cursor:pointer;
    
    svg {
        width:90%;
        height:90%;
        fill:var(--white);
    }
}

input {
    border-radius:0;
}
`