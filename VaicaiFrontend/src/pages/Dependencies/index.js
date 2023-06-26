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
} from './styles';

import logoImg from '../../assets/logo.png';

const Dependencies = () => {

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="Vaicai" />
            <Profile>
              <div>
                <span>O que foi usado?</span>
              </div>
            </Profile>
          </HeaderContent>
        </Header>
        <Content>
          <DependencyList>
            <ul>
              <li>"@testing-library/jest-dom": "^5.11.4"</li>
              <li>"@testing-library/react": "^11.1.0"</li>
              <li>"@testing-library/user-event": "^12.1.10"</li>
              <li>"@types/yup": "^0.29.14"</li>
              <li>"@unform/core": "^2.1.6"</li>
              <li>"@unform/web": "^2.1.6"</li>
              <li>"axios": "^0.21.1"</li>
              <li>"feather-icons": "^4.29.0"</li>
              <li>"polished": "^4.2.2"</li>
              <li>"react": "^17.0.2"</li>
              <li>"react-dom": "^17.0.2"</li>
              <li>"react-icons": "^4.4.0"</li>
              <li>"react-router-dom": "^5.2.0"</li>
              <li>"react-scripts": "4.0.3"</li>
              <li>"styled-components": "^5.3.1"</li>
              <li>"web-vitals": "^1.0.1"</li>
              <li>"yup": "^0.32.11"</li>
            </ul>
          </DependencyList>
          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default Dependencies;