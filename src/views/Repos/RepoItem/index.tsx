import { AiOutlineStar } from "react-icons/ai";
import { FiLock, FiUnlock } from "react-icons/fi";

import { IRepos } from "../../../store/modules/repos/types";

import { Container, NameSpace, Border, Name, BioRepo, FooterRepo, StarDiv, StarNumber } from './styles';

interface IRepoItem {
  item: IRepos;
}

export const RepoItem = ({ item }: IRepoItem) => {
  console.log(item);

  return (
    <Container>
      <NameSpace>
        <Border />
        <Name>{item.name}</Name>
      </NameSpace>
      <BioRepo>
        {item.description ?? 'No description for this repo'}
      </BioRepo>
      <FooterRepo>
        <StarDiv>
          <AiOutlineStar width={30} color="#FFCE00" style={{ marginLeft: '1rem' }} />
          <StarNumber>{item.stargazers_count}</StarNumber>
        </StarDiv>
        <div style={{ marginRight: '1rem' }}>
          <FiUnlock color="green"/>
          <FiLock color="red" />
        </div>
      </FooterRepo>
    </Container>
  )
}