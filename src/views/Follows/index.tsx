import { useSelector } from 'react-redux';

import { FollowHeader } from '../../components/Follows/FollowHeader';
import { FollowItem } from '../../components/Follows/FollowItem';
import { BottomBar } from '../../components/BottomBar';

import { Container, Main } from './styles';

import { IState } from '../../store/store';
import { IResumeFollower } from '../../store/modules/followers/types';

export const PageFollows = () => {
  const followers = useSelector<IState, IResumeFollower[]>(state => state.followers);

  return (
    <>
      <FollowHeader type="follow" />
      <Main>
        {
          followers.map(follower => (
            <FollowItem name={follower.login} url={follower.url} avatar_url={follower.avatar_url} />
          ))
        }
      </Main>
      <Container>
        <BottomBar page="follows" />
      </Container>
    </>
  )
}