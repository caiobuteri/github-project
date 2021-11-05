import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { AiOutlineArrowRight } from 'react-icons/ai';

import { addDataToHome } from "../../store/modules/home/action";
import { addDataToRepos } from "../../store/modules/repos/action";
import { addDataToFollowers } from "../../store/modules/followers/action";
import { addDataToFollowing } from '../../store/modules/following/action';

import { getPersonalData } from '../../utils/getPersonalData';
import { getPublicRepos } from '../../utils/getPublicRepos';
import { getFollowers } from '../../utils/getFollowers';
import { getFollowing } from '../../utils/getFollowing';

import GithubLogo from '../../assets/github-logo.png'

import { Button, Container, Input, Logo } from "./styles";

export const Login = () => {
  const [user, setUser] = useState('');
  const history = useHistory();

  const dispatch = useDispatch();
  
  const handleLogin = async () => {
    const DataHome = await getPersonalData(user);
    const DataRepos = await getPublicRepos(user);
    const DataFollowers = await getFollowers(user);
    const DataFollowing = await getFollowing(user);

    dispatch(addDataToHome(DataHome));
    dispatch(addDataToRepos(DataRepos));
    dispatch(addDataToFollowers(DataFollowers));
    dispatch(addDataToFollowing(DataFollowing));

    history.push('/home');
  }

  return (
    <Container>
      <Logo src={GithubLogo} alt="Github Finder" />
      <Input type="text" value={user} onChange={event => setUser(event.target.value)} placeholder="Usuário" />
      <Button onClick={handleLogin}>
        ENTRAR <AiOutlineArrowRight />
      </Button>
    </Container>
  )
}