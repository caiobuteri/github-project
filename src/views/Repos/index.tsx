import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { IRepos } from '../../store/modules/repos/types';
import { IState } from '../../store/store';

import { RepoItem } from './RepoItem';

import { BottomBar } from '../../components/BottomBar';

import { BackgroundBottomBar, Header, HeaderContent, Main } from "./styles";

export const Repos = () => {
  const history = useHistory();
  const data = useSelector<IState, IRepos[]>(state => state.repos);

  return (
    <div>
      <Header>
        <HeaderContent>
          <AiOutlineArrowLeft onClick={() => history.push('home')} style={{ cursor: 'pointer' }} size={30} />
          10 repos
          <div/>
        </HeaderContent>
      </Header>
      <Main>
        {
          data.map(item => {
            return (
              <RepoItem item={item} key={item.id} />
            )
          })
        }
      </Main>
      <BackgroundBottomBar>
        <BottomBar page="repos" />
      </BackgroundBottomBar>
    </div>
  )
}