import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { Container,
  Header,
  Main,
  PhotoBox,
  ProfilePhoto,
  HeaderContentBox,
  Tag,
  Logout,
  NameSpace,
  Name,
  Border,
  ComplementarInformation,
  NumbersContainer,
  SpecificNumberContainer,
  Number,
  Title,
  Bio,
  ContainerBottomBar
} from "./styles";

import { BottomBar } from '../../components/BottomBar';

import Photo from '../../assets/caio.jpg';

import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';

import { IState } from "../../store/store";
import { IHome } from "../../store/modules/home/types";

import { getPersonalData } from "../../utils/getPersonalData";

interface IParams {
  user?: string;
}

export const Home = () => {
  const params: IParams = useParams();
  const { user } = params;

  useEffect(() => {
    if (user){
      getData(user);
    }

    async function getData(user: string){
      const DataHome = await getPersonalData(user);
      
    }
  }, []);

  if (user) {
    
  }
  
  const data = useSelector<IState, IHome>(state => state.home);

  return (
    <Container>

      <Header>
        <HeaderContentBox>
          <Tag>{data.login}</Tag>
          <Logout>
            {
              user ?
              <>
                Entrar
                <AiOutlineLogin size={30} color="green" />
              </> :
              <>
                Sair
                <AiOutlineLogout size={30} color="red" />
              </>
            }
          </Logout>
        </HeaderContentBox>
      </Header>

      <Main>
        <PhotoBox>
          <ProfilePhoto image={Photo} />
        </PhotoBox>

        <NameSpace>
          <Border />     
          <Name>{data.name}</Name>
        </NameSpace>

        <ComplementarInformation>caiobuteri@gmail.com</ComplementarInformation>
        <ComplementarInformation>Vitória/ES</ComplementarInformation>

        <NumbersContainer>
          <SpecificNumberContainer>
            <Number>32</Number>
            <Title>Seguidores</Title>
          </SpecificNumberContainer>
          <SpecificNumberContainer>
            <Number>32</Number>
            <Title>Seguindo</Title>
          </SpecificNumberContainer>
          <SpecificNumberContainer>
            <Number>10</Number>
            <Title>Repos</Title>
          </SpecificNumberContainer>
        </NumbersContainer>

        <NameSpace>
          <Border />     
          <Name>BIO</Name>
        </NameSpace>

        <Bio>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur.
        </Bio>
        <ContainerBottomBar>
          <BottomBar page="home" />
        </ContainerBottomBar>
      </Main>
    </Container>
  )
}