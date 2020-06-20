import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContaier, TabItem, TabText} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContaier>
        <TabItem>
          <Icon name="phone-iphone" size={24} color="#f9d423" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#f9d423" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#f9d423" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#f9d423" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="local-atm" size={24} color="#f9d423" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#f9d423" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContaier>
    </Container>
  );
}
