import * as React from 'react'

import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    VStack
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';



const Hero = () => {
    return (
        <Container maxW="xl">
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 6, md: 10 }}
                py={{ base: 20, md: 36 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Una nueva UC para<br />
                    un nuevo Chile.
                </Heading>
                <VStack spacing="30px">
                    <Text color={'gray.500'} fontSize="xl">
                        Somos un movimiento político universitario de centro-izquierda fundado en la Universidad Católica de Chile.
                    </Text>
                    <Text color={'gray.500'} fontSize="xl">
                        Nos caracteriza ser un movimiento activo, propositivo, autónomo, tolerante, pluralista, progresista y <b>profundamente democrático.</b>
                    </Text>
                </VStack>
                <Stack
                    direction={'column'}
                    spacing={3}
                    align={'center'}
                    alignSelf={'center'}
                    position={'relative'}>
                    <Button
                        colorScheme={'green'}
                        bgGradient="linear(to-r, #146A71, #2BB97F)"
                        px={6}
                        _hover={{
                            bg: '#2BB97F',
                        }}>
                        Súmate al movimiento <ChevronRightIcon />
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Hero
