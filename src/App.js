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
const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
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
        <ButtonGroup>
          <Button size="large">Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="gray" size="large">
            Button
          </Button>
          <Button color="gray">Button</Button>
          <Button color="gray" size="small">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large" outline>
            Button
          </Button>
          <Button color="pink" outline>
            Button
          </Button>
          <Button color="pink" size="small" outline>
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            Button
          </Button>
          <Button color="gray" size="large" fullWidth>
            Button
          </Button>
          <Button color="pink" size="large" fullWidth>
            Button
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
