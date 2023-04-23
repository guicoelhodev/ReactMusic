import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  /* background: linear-gradient(180deg, #ffffff 0%, #eeeeee 0%, #fed8e6 100%); */
  background: whitesmoke;
`;

export const Container = styled.div`
  width: min(82.25rem, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  height: 5rem;
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(p) => p.theme.colors["purple-800"]};

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const PlayerControls = styled.div``;

export const Main = styled.main`
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  height: calc(100vh - 5rem);
`;

export const MusicNav = styled.section`
  height: 100%;
  align-self: flex-start;
  flex: 1;

  display: grid;
  grid-template-rows: auto 1fr;

  ul {
    margin-top: 1rem;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 1rem 0;

    overflow-y: auto;
  }
`;
