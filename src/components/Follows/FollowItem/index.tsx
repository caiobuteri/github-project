import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Photo from '../../../assets/caio.jpg';

import { ContainerItem, Border, ProfilePhoto, InfoPersonal, Name, Line } from './styles';

interface IFollowItem {
  name: string;
  url: string;
  avatar_url: string;
}

export const FollowItem = ({ name, url, avatar_url }: IFollowItem) => {
  return (
    <>
      <Link style={{ textDecoration: 'none' }} to={`/home/${name}`}>
        <ContainerItem>
          <InfoPersonal>
            <Border />
            <ProfilePhoto style={{ marginLeft: '1rem' }} image={avatar_url} />
            <Name>
              #{name}
            </Name>
          </InfoPersonal>
          <div style={{ display: 'flex' }}>
            <AiOutlineArrowRight style={{ cursor: 'pointer' }} color="#FFFFFF" size={30} />
            <div style={{ width: '1rem' }} />
          </div>
        </ContainerItem>
      </Link>
      <Line />
    </>
  )
}