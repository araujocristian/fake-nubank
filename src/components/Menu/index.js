import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavItemInit,
  NavText,
  SingOutButton,
  SingOutButtonText,
} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://nubank.com.br"
          size={80}
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </Code>
      <Nav>
        <NavItem>
          <NavItemInit>
            <Icon name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavItemInit>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavItemInit>
            <Icon name="person-outline" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </NavItemInit>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavItemInit>
            <Icon name="credit-card" size={20} color="#fff" />
            <NavText>Configurar cartão</NavText>
          </NavItemInit>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        <NavItem>
          <NavItemInit>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </NavItemInit>
          <Icon name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
      </Nav>

      <SingOutButton onPress={() => {}}>
        <SingOutButtonText>SAIR DO APP</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
}
