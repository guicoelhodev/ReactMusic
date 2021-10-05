import styled from 'styled-components';

export const ContainerPlayer = styled.div`
  position:fixed;
  margin-right: auto;
  z-index:2;
  width:260px;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    padding:0 30px;
    text-align:center;
  }

  aside {
    display:flex;
    color:#222222;
    padding-bottom:8px;
    
    p {
      word-wrap:break-word;
    }
  }
`;


export const ImageDiv = styled.div`
width:clamp(40px, 80%, 140px);
height:clamp(40px, 80%, 140px);
display:grid;
place-items:center;
border:1px solid red;

`

export const Image = styled.img`
width:80%;
object-fit: contain;
`

export const PlayerInteraction = styled.article`

  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 20px;
  gap:30px;

`

export const DeezerButton = styled.button`

width:200px;
height:60px;
background-color:var(--white);
padding:10 20px;
border-radius: 12px;
border:1px solid var(--black);
cursor:pointer;
`
export const Img = styled.img`
width:80%;
object-fit:contain;
`