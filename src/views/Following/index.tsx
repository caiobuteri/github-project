import { useSelector } from 'react-redux';

import { FollowHeader } from '../../components/Follows/FollowHeader';
import { FollowItem } from '../../components/Follows/FollowItem';
import { BottomBar } from '../../components/BottomBar';

import { IResumeFollowing } from '../../store/modules/following/types';
import { IState } from '../../store/store';

import { Container, Main } from './styles';

export const Following = () => {
  const following = useSelector<IState, IResumeFollowing[]>(state => state.following);

  return (
    <>
      <FollowHeader listFollows={following} type="following" />
      <Main>
        {
          following.map(item => (
            <FollowItem name={item.login} url={item.url} avatar_url={item.avatar_url} />
          ))
        }
      </Main>
      <Container>
        <BottomBar page="following" />
      </Container>
    </>
  )
}