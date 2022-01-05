import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Feather } from '@expo/vector-icons';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.Text>hello up App.js to start working on your app!</S.Text>
      <Feather name="home" size={24} color="#000" />
      <StatusBar style="auto" />
    </S.Container>
  );
}
