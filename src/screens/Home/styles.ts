import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  color: red;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
`;
