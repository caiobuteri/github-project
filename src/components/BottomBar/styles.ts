import styled from "styled-components";

interface ITitle {
  selected: boolean;
}

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 5rem;
  padding: 0 1.5rem;
  margin-top: 2rem;
  background-color: #FFFFFF;

  border-radius: 20px 20px 0 0;

  @media (max-width: 450px){
    padding: 0 1.5rem;
  }
`;

export const DivItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p<ITitle>`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;

  color: ${({ selected }) => selected ? '#000000' : '#A5A5A5'};
`;