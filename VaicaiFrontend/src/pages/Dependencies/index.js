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
              <li>"@babel/plugin-proposal-class-properties": "^7.10.1"</li>
              <li>"@babel/plugin-proposal-decorators": "^7.10.3"</li>
            </ul>
          </DependencyList>
          <AdditionalDependencies>
            <ul>
              <li>"@types/bcryptjs": "^2.4.2"</li>
              <li>"@types/express": "^4.17.6"</li>
              <li>"@types/hapi__joi": "^17.1.0"</li>
              <li>"@types/ioredis": "^4.16.2"</li>
              <li>"@types/jest": "^25.2.1"</li>
              <li>"@types/jsonwebtoken": "^8.3.9"</li>
              <li>"@types/mongodb": "^3.5.16"</li>
              <li>"@types/multer": "^1.4.2"</li>
              <li>"babel-plugin-transform-typescript-metadata": "^0.3.0"</li>
              <li>"eslint": "5.16.0"</li>
              <li>"eslint-config-prettier": "^6.10.1"</li>
              <li>"eslint-import-resolver-typescript": "^2.0.0"</li>
              <li>"eslint-plugin-prettier": "^3.1.3"</li>
              <li>"jest": "^26.0.1"</li>
              <li>"prettier": "^2.0.4"</li>
              <li>"ts-jest": "^25.5.0"</li>
              <li>"ts-node-dev": "^1.0.0-pre.44"</li>
              <li>"tsconfig-paths": "^3.9.0"</li>
              <li>"typescript": "^3.8.3"</li>
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

export default Dependencies;