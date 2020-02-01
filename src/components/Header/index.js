import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Top, Logo, Title } from './styles';

import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Cristian</Title>
      </Top>
      <Icon name="chevron-down" size={20} color="#fff" />
    </Container>
  );
}
