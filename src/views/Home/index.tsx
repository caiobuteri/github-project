import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch } from "react-redux";
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

import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';

import { IState } from "../../store/store";
import { IHome } from "../../store/modules/home/types";

import { addDataToHome } from "../../store/modules/home/action";
import { addDataToRepos } from "../../store/modules/repos/action";
import { addDataToFollowers } from "../../store/modules/followers/action";
import { addDataToFollowing } from '../../store/modules/following/action';

import { getPersonalData } from '../../utils/getPersonalData';
import { getPublicRepos } from '../../utils/getPublicRepos';
import { getFollowers } from '../../utils/getFollowers';
import { getFollowing } from '../../utils/getFollowing';

interface IParams {
  user?: string;
}

export const Home = () => {
  const [ dataUser, setDataUser ] = useState({} as IHome);

  const params: IParams = useParams();
  const { user } = params;

  const history = useHistory();
  
  const dispatch = useDispatch();
  const data = useSelector<IState, IHome>(state => state.home);

  useEffect(() => {
    if (user){
      getData(user);
    } else {
      setDataUser(data);
    }

    async function getData(user: string){
      const DataHome = await getPersonalData(user);
      setDataUser(DataHome);
    }
  }, []);

  const handleChangeDataUser = async () => {
    const DataHome = await getPersonalData(dataUser.login);
    const DataRepos = await getPublicRepos(dataUser.login);
    const DataFollowers = await getFollowers(dataUser.login);
    const DataFollowing = await getFollowing(dataUser.login);

    dispatch(addDataToHome(DataHome));
    dispatch(addDataToRepos(DataRepos));
    dispatch(addDataToFollowers(DataFollowers));
    dispatch(addDataToFollowing(DataFollowing));

    history.push('/home');
  }

  return (
    <Container>

      <Header>
        <HeaderContentBox>
          <Tag>{dataUser.login}</Tag>
          <Logout>
            {
              user ?
              <Logout onClick={handleChangeDataUser}>
                Entrar
                <AiOutlineLogin size={30} color="green" />
              </Logout> :
              <Logout>
                Sair
                <AiOutlineLogout size={30} color="red" />
              </Logout>
            }
          </Logout>
        </HeaderContentBox>
      </Header>

      <Main>
        <PhotoBox>
          <ProfilePhoto image={dataUser.avatar_url} />
        </PhotoBox>

        <NameSpace>
          <Border />     
          <Name>{dataUser.name}</Name>
        </NameSpace>

        <ComplementarInformation>caiobuteri@gmail.com</ComplementarInformation>
        <ComplementarInformation>Vitória/ES</ComplementarInformation>

        <NumbersContainer>
          <SpecificNumberContainer>
            <Number>{dataUser.followers}</Number>
            <Title>Seguidores</Title>
          </SpecificNumberContainer>
          <SpecificNumberContainer>
            <Number>{dataUser.following}</Number>
            <Title>Seguindo</Title>
          </SpecificNumberContainer>
          <SpecificNumberContainer>
            <Number>{dataUser.public_repos}</Number>
            <Title>Repos</Title>
          </SpecificNumberContainer>
        </NumbersContainer>

        <NameSpace>
          <Border />     
          <Name>BIO</Name>
        </NameSpace>

        <Bio>
          {dataUser.bio}
        </Bio>
        <ContainerBottomBar>
          <BottomBar page="home" />
        </ContainerBottomBar>
      </Main>
    </Container>
  )
}