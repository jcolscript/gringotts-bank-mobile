import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButtom,
  SignOutButtomText,
} from './styles';

const Menu = () => {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://jcolscript.com.br"
          size={70}
          backgroundColor="#3b3a40"
          color="#fff"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="local-atm" size={20} color="#fff" />
          <NavText>Configurar conta</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButtom onPress={() => {}}>
        <SignOutButtomText>Sair do app</SignOutButtomText>
      </SignOutButtom>
    </Container>
  );
};

export default Menu;
