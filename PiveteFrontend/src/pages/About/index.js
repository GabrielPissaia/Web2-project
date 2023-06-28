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
  Back,
} from './styles';

import logoImg from '../../assets/logo.png';

const Dependencies = () => {

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="pivete" />
            <Profile>
              <div>
                <span>Nossa ideia</span>
              </div>
            </Profile>
          </HeaderContent>
        </Header>
        <Content>
          <DependencyList>
            <ul>
              <li>"Bem-vindo ao nosso serviço de venda de sorvetes online! Com o objetivo de tornar</li>
              <li>a compra de sorvetes mais conveniente, oferecemos uma plataforma fácil de usar,</li>
              <li>onde os clientes podem fazer seus pedidos de sorvetes personalizados.</li>
              <br></br>
              <li>Nossa equipe se encarrega de preparar o pedido com cuidado, e você pode  </li>
              <li>acompanhar a entrega em tempo real. Trabalhamos com as melhores sorveterias</li>
              <li>locais, garantindo sorvetes frescos e de alta qualidade.</li>
              <br></br>
              <li>Desfrute dos melhores sabores de sorvetes no conforto da sua casa, escritório ou</li>
              <li>onde preferir. Faça parte da nossa comunidade e experimente a conveniência de</li>
              <li>pedir sorvetes deliciosos com apenas alguns cliques.</li>
              <br></br>
              <li>Simplifique sua experiência de compra de sorvetes. Faça seu pedido online e</li>
              <li>saboreie momentos refrescantes!</li>
            </ul>
          </DependencyList>
        </Content>
        <Back>
          <Link to="/dependencies">
              <FiLogIn />
              Voltar as tecnologias
          </Link>
        </Back>
      </Container>
    </>
  );
};

export default Dependencies;