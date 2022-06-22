import * as React from 'react'
import Layout from '../components/layout'

import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

const ContactForm = <Box p={4}>
    <Box>
        <Heading>Contacto 📬</Heading>
        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
            Rellena el formulario para contactarnos.
        </Text>
    </Box>
    <Box bg="white" borderRadius="lg">
        <Box m={8} py={8} color="#0B0E3F">
            <VStack spacing={5}>
                <FormControl id="name">
                    <FormLabel>Tu nombre</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />} />
                        <Input type="text" size="md" />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />} />
                        <Input type="text" size="md" />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder="Un mensaje." />
                </FormControl>
                <FormControl id="name" float="right">
                    <Button
                        variant="solid"
                        bg="#0D74FF"
                        color="white"
                        _hover={{}}>
                        Enviar mensaje
                    </Button>
                </FormControl>
            </VStack>
        </Box>
    </Box>
</Box>;


function ContactBlock() {
    return (
        <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    {ContactForm}
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        <a href="mailto:contacto@naupuc.cl">contacto@naupuc.cl</a>
                    </Button>
                </Box>
            </Flex>
        </Container>
    );
}


const ContactPage = () => {
    return (
        <Layout pageTitle="Contacto">
            <ContactBlock />
        </Layout>
    )
}

export default ContactPage
