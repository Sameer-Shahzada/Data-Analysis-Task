import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Flex, AppShell } from '@mantine/core';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RouterSwitcher from './components/RouterSwitcher';
import './App.css';

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div style={{ marginTop: '20px' }}>
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header toggle={toggle} opened={opened} />
      <Navbar />
      <AppShell.Main>
        <RouterSwitcher />
      </AppShell.Main>

      <AppShell.Footer zIndex={opened ? 'auto' : 201}>
        <Flex justify="center">
          Made by Md Sameer 😉
        </Flex>
      </AppShell.Footer>

    </AppShell>
  </div>
  );
}

export default App;
