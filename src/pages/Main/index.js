import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';

import Header from '~/components/Header';
import {
  Container,
  Content,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <FaIcon name="coins" size={20} color="#aaa" />
            <Icon name="visibility-off" size={20} color="#aaa" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <FaIcon name="comments-dollar" size={20} color="#aaa" />
            <Annotation>
              Transferência de R$ 20.000,00 recebida de Elon Musk às 14:34h.
            </Annotation>
            <Icon name="keyboard-arrow-right" size={20} color="#aaa" />
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
