import React, { Suspense } from 'react';
import { ChakraProvider, ColorModeScript,Center } from '@chakra-ui/react';
import NavBar from './Navigation/index';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Route';
import theme from './ColorMode';
function Application() {
    return (

        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorModek} />
            
            <Router>
                <NavBar />
                <Suspense fallback={<Center><h1>Loading...</h1></Center>}>
                <Routes />
        </Suspense>
            </Router>
        </ChakraProvider>

    );
}

export default Application;
