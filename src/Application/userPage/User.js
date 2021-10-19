import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/layout';

function User({ bg, color, fontSize, posts }) {

    return (
        <>
            <Container marginTop={3} maxW='container.xl' bg={bg}>
                <Heading fontSize={fontSize} color={color}>Hello Guest</Heading>
            </Container>
            <Container maxW='full' marginTop={3} >
                <SimpleGrid p={2} columns={[1, 2, 3]} spacingX="40px" spacingY="20px">

                    {
                        posts.map(post => (
                            <Box key={post.id} p={5} shadow="md" borderWidth="1px" >
                                <Heading fontSize="xl">{post.title}</Heading>
                                <Text mt={4}>{post.body}</Text>
                            </Box>
                        ))
                    };
                </SimpleGrid>
            </Container>
        </>
    );
}

export default User;
