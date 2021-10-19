import React from 'react';
import { Link } from 'react-router-dom';

import { SimpleGrid, Container, Center, Circle, Button } from '@chakra-ui/react';
import { InputLeftAddon, InputGroup, Input, InputRightElement } from '@chakra-ui/input';

function LoginUI({ handleType, view}) {

    // toggle password textbox type arttribute
    return (
        <Container maxW='container.md'>
                       <SimpleGrid p={4} marginTop={3} columns={[1, null, 2]} spacing={10}>
                <InputGroup>
                    <InputLeftAddon bg='tomato' color="white" children='Email' />
                    <Input type='email' color="tomato" placeholder='name@example.com' name='emailid' />
                </InputGroup>


                <InputGroup>
                    <InputLeftAddon bg='tomato' color="white" children='Password' />

                    <Input type={view ? "text" : "password"} color="tomato" placeholder='enter password' name='pswd'/>
                    
                    <InputRightElement bg='tomato' color="white" width="4.5rem">
                    
                        <Button colorScheme='tomato' color="white" onClick={handleType} >
                    
                            {view ? "Hide" : "view"}
                    
                        </Button>
                    
                    </InputRightElement>
                </InputGroup>


            </SimpleGrid>

            <Center marginTop={3}><Circle size="100px" bg="tomato" color="white">
                < Link  to='/userpage'  >Login</Link>
            </Circle></Center>
        </Container>


    );
}

export default LoginUI;
