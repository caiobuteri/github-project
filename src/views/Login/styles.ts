import styled from 'styled-components';

export const Container = styled.main`
  background-color: #292929;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 10rem;
  margin-bottom: 3rem;
`;

export const Input = styled.input`
  height: 3rem;
  width: 80%;
  max-width: 20rem;

  padding: 0 1rem;
  margin-bottom: 1rem;

  border-radius: 10px;

  font-size: 20px;

`;

export const Button = styled.button`
  height: 3rem;
  width: 80%;
  max-width: 22rem;

  border-radius: 10px;

  background-color: #FFCE00;

  font-size: 25px;
  font-weight: 600;

  cursor: pointer;
`;