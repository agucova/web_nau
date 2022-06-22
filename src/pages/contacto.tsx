import { Container, Heading, VStack, Text, FormControl, FormLabel, FormHelperText, Input, Textarea, Button } from '@chakra-ui/react'
import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contacto">
            <Container maxW="2xl" minH="2xl" centerContent>
                <VStack spacing={8}>
                    <Heading>Contacto</Heading>
                    <Text>Si tienes alguna duda o quieres saber más, puedes contactarnos a través de nuestro formulario de contacto.</Text>
                    <form name="contact">
                        <FormControl>
                            <FormLabel htmlFor="name">Nombre</FormLabel>
                            <Input id="name" name="name" type="text" placeholder="Nombre" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='email'>Correo electrónico</FormLabel>
                            <Input id='email' type='email' />
                            <FormHelperText>Nunca compartiremos tu mail.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='message'>Mensaje</FormLabel>
                            <Textarea id='message' rows={10} />
                        </FormControl>
                        <Button>Enviar</Button>
                    </form>
                </VStack>
            </Container>
        </Layout>
    )
}

export default ContactPage
