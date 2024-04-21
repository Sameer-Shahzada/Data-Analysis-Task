import React from 'react'
import { Flex, AppShell, Burger, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = ({toggle, opened}: any) => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light')

    // color scheme 
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <AppShell.Header>
            <Flex justify='space-between' align='center' style={{ padding: '10px 20px' }}>
                <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
                <div>Manufac Analytics | SDE Assignment </div>
                <Button size='sm' variant='link' onClick={toggleColorScheme}>
                    {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
                </Button>
            </Flex>
        </AppShell.Header>
    )
}

export default Header