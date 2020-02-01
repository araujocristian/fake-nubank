import React from 'react';

import Header from '~/components/Header';
import { Container } from './styles';
import Tabs from '~/components/Tabs';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
