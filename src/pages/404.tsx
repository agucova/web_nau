import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import { Container, Heading, Text, VStack } from "@chakra-ui/react"

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 | No encontrado">
      <Container maxW="2xl" minH="2xl" centerContent>
        <VStack spacing="30">
          <Heading>Página no encontrada</Heading>
          <Text>
            Lo sentimos 😔 no pudimos encontrar la página que estabas buscando.
          </Text>
          <Link to="/"><b>Volver al inicio</b></Link>.
        </VStack>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
