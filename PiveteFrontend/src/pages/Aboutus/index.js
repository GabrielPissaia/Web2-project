import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  DependencyList,
  AdditionalDependencies,
} from './styles';

import logoImg from '../../assets/logo.png';

const Aboutus = () => {

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="pivete" />
            <Profile>
              <div>
                <span>Converse com a gente</span>
              </div>
            </Profile>
          </HeaderContent>
        </Header>
        <Content>
          <DependencyList>
            <ul>
              <li>GABRIEL HENRIQUE PISSAIA</li>
              <br></br>
              <li>JOAO ELER</li>
            </ul>
          </DependencyList>
          <AdditionalDependencies>
            <ul>
              <li>gabrielpissss@gmail.com</li>
              <br></br>
              <li>joaoeler</li>
            </ul>
          </AdditionalDependencies>
        </Content>
        <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
      </Container>
    </>
  );
};

export default Aboutus;