import styled from 'styled-components';

interface IProfilePhoto {
  image: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  height: 10rem;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  background-color: #1F1F1F;
`;

export const HeaderContentBox = styled.div`
  width: 100%;
  height: 2rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tag = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #FFFFFF;
`;

export const Logout = styled.div`
  width: 5.5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: 1rem;
  font-weight: 600;
  color: #FFFFFF;

  cursor: pointer;
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 10rem - 5rem);
  background-color: #292929;

  display: flex;
  flex-direction: column;

  @media (max-width: 500px){
    height: auto;
  }
`;

export const PhotoBox = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
`;

export const ProfilePhoto = styled.div<IProfilePhoto>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  width: 150px;
  height: 150px;
  border-radius: 75px;

  margin-top: -75px;
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
  font-size: 1.3rem;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;

  margin-left: 0.5rem;
`;

export const ComplementarInformation = styled.p`
  margin: 0;
  margin-left: 1.25rem;
  
  color: #FFFFFF;
  font-size: 1rem;
`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7rem;
  margin-top: 3rem;
  padding: 2rem 3rem;

  background-color: #5252525D;


  @media (max-width: 350px){
    padding: 0 2rem;
  }

  @media (min-width: 800px){
    padding: 0 7rem;
  }

  @media (min-width: 1300px){
    padding: 0 10rem;
  }
`;

export const SpecificNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;

  @media (max-width: 600px){
    padding: 0.5rem 0;
  }
`;

export const Number = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  color: #FFFFFF;

  @media (max-width: 350px){
    font-size: 1.5rem;
  }
`;

export const Title = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  color: #FFFFFF;
  font-size: 1rem;

  @media (max-width: 350px){
    font-size: 0.7rem;
  }
`;

export const Bio = styled.div`
  display: flex;

  margin-bottom: 7rem;
  margin-left: 1.25rem;
  width: 40rem;
  
  color: #FFFFFF;
  font-size: 1rem;

  word-break: break-word;

  @media (max-width: 800px){
    width: 30rem;
  }

  @media (max-width: 520px){
    width: 90%;
  }
`;

export const ContainerBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  
  height: 5rem;
  background-color: #292929;
`;