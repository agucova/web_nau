import * as React from 'react'
import Layout from '../components/layout'
import { Heading, Container } from '@chakra-ui/react'

const OurHistoryPage = () => {
    return (
        <Layout pageTitle="Nuestra historia">
            <Container maxW="2xl" minH="2xl" centerContent>
                <Heading>Nuestra historia</Heading>
            </Container>
        </Layout>
    )
}

export default OurHistoryPage
