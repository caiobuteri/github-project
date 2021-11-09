import { useHistory } from 'react-router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Header, HeaderContent } from "./styles";

import { IResumeFollower } from '../../../store/modules/followers/types';

interface IFollowHeader {
  type: "follow" | "following";
  listFollows: IResumeFollower[];
}

export const FollowHeader = ({ type, listFollows }: IFollowHeader) => {
  const history = useHistory();

  return (
    <Header>
      <HeaderContent>
        <AiOutlineArrowLeft onClick={() => history.push('home')} style={{ cursor: 'pointer' }} size={30} />
        { type === "follow" ? `${listFollows.length} seguimores` : `${listFollows.length} seguindo` }
        <div/>
      </HeaderContent>
    </Header>
  )
}