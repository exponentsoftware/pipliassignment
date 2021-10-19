import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { Container, Heading, Text, VStack, Stack } from '@chakra-ui/layout';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navigation({ colorMode, toggleColorMode, client_ip, timezone, utc_datetime }) {

    return (

        <Container p={3} maxW='container.xl' bg='teal'>
            <Stack direction={["column-reverse", "row"]} justify='baseline' justifyContent='space-between'>
                <VStack>
                    <Heading color='white'>{timezone}</Heading>
                    <Text color='white'>{utc_datetime}</Text>
                </VStack>
                <Text mt={4} color='white'> {client_ip}</Text>
                <IconButton width="50px" height='50px' variant='unstyled' color='white' p={4} onClick={toggleColorMode}>

                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}

                </IconButton>
            </Stack>
        </Container>
    );
}

export default Navigation;
