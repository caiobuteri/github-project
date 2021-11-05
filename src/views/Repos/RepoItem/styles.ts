import styled from "styled-components"

export const Container = styled.div`
  padding: 1rem 0;
`;

export const NameSpace = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 1rem;
`;

export const Border = styled.div`
  width: 1.5rem;
  height: 3.2rem;
  background-color: #FFCE00;

  margin-left: -0.75rem;

  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #FFFFFF;

  margin-left: 0.5rem;
`;

export const BioRepo = styled.p`
  margin: 0;
  margin-left: 1.25rem;
  
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 300;
`;

export const FooterRepo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 100vw;
  margin-top: 1rem;
`;

export const StarDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StarNumber = styled.p`
  margin: 0;
  padding: 0;
  color: #FFFFFF;
  font-size: 1.1rem;

  margin-left: 0.4rem;
`;