import styled from "styled-components";

export const Header = styled.header`
  background-color: #1F1F1F;
  color: #FFFFFF;

  height: 3rem;
  font-size: 1rem;
  padding: 1rem 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Main = styled.main`
  min-height: calc(100vh - 3rem - 5rem);

  background-color: #292929;
`;

export const BackgroundBottomBar = styled.div`
  height: 5rem;
  background-color: #292929;
`;