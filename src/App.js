import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        },
      }}
    >
      <AppBlock>
        <Button>Blue</Button>
        <Button color="gray">Gray</Button>
        <Button color="pink">Pink</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
