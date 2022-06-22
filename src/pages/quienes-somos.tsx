import * as React from 'react'
import Layout from '../components/layout'
import { Heading, Container } from '@chakra-ui/react'

const WhoWeArePage = () => {
  return (
    <Layout pageTitle="Quiénes somos">
      <Container maxW="2xl" minH="2xl" centerContent>
        <Heading>Nuestro equipo</Heading>
      </Container>
    </Layout>
  )
}

export default WhoWeArePage
