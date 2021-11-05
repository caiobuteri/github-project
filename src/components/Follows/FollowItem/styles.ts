import styled from "styled-components";

interface IProfilePhoto {
  image: string;
}

export const ContainerItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 7rem;

  background-color: #292929;
`;

export const InfoPersonal = styled.div`
  display: flex;
  align-items: center;
`;

export const Border = styled.div`
  width: 1.5rem;
  height: 3.2rem;
  background-color: #FFCE00;

  margin-left: -0.75rem;

  border-radius: 10px;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: #FFFFFF;

  margin-left: 2rem;
`;

export const ProfilePhoto = styled.div<IProfilePhoto>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #333;

`;
