import { useState } from 'react';
import { AiOutlineHome, AiOutlineGithub, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useHistory } from 'react-router';

import { Container, DivItems, Title } from "./styles"

type PageNames = ('home' | 'repos' | 'follows' | 'following');

interface IBottomBar {
  page: PageNames;
}

export const BottomBar = ({ page }: IBottomBar) => {

  const history = useHistory();

  function handleClick(button: PageNames){
    history.push(`/${button}`);
  }

  return (
    <Container>
      <DivItems style={{ cursor: 'pointer' }} onClick={() => handleClick('home')}>
        <AiOutlineHome color={page === 'home' ? '#000000' : '#A5A5A5'} size={30} />
        <Title selected={page === 'home'}>
          Home
        </Title>
      </DivItems>
      <DivItems style={{ cursor: 'pointer' }} onClick={() => handleClick('repos')}>
        <AiOutlineGithub color={page === 'repos' ? '#000000' : '#A5A5A5'} size={30} />
        <Title selected={page === 'repos'}>
          Repos
        </Title>
      </DivItems>
      <DivItems style={{ cursor: 'pointer' }} onClick={() => handleClick('follows')}>
        <AiOutlineUsergroupAdd color={page === 'follows' ? '#000000' : '#A5A5A5'} size={30} />
        <Title selected={page === 'follows'}>
          Seguidores
        </Title>
      </DivItems>
      <DivItems style={{ cursor: 'pointer' }} onClick={() => handleClick('following')}>
        <AiOutlineUsergroupAdd color={page === 'following' ? '#000000' : '#A5A5A5'} size={30} />
        <Title selected={page === 'following'}>
          Seguindo
        </Title>
      </DivItems>
    </Container>
  )
}