import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  z-index: 1;
  color: red;
  position: absolute;
  background-color: green;
`;

function Welcome() {
  return <StyledText>Welcome</StyledText>;
}

export default Welcome;
