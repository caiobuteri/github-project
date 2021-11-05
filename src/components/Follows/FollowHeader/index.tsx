import { useHistory } from 'react-router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Header, HeaderContent } from "./styles";

interface IFollowHeader {
  type: "follow" | "following";
}

export const FollowHeader = ({ type }: IFollowHeader) => {
  const history = useHistory();

  return (
    <Header>
      <HeaderContent>
        <AiOutlineArrowLeft onClick={() => history.push('home')} style={{ cursor: 'pointer' }} size={30} />
        { type === "follow" ? "10 seguimores" : "10 seguindo" }
        <div/>
      </HeaderContent>
    </Header>
  )
}