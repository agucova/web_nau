import * as React from 'react'
import Layout from '../components/layout'
import { Heading, Container, Flex, Avatar, Stack, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react'

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  function getInitials(name: string) {
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials;
  }

  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} name={name} mb={2} size="xl" getInitials={getInitials} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'md'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="3xl" mb={70} px={4}>
      <Stack spacing={4}>{children}</Stack>
    </Container>
  );
}

const WhoWeArePage = () => {
  return (
    <Layout pageTitle="Quiénes somos">
      <Section>
        <Heading>Coordinación</Heading>
        <SimpleGrid minChildWidth="160px">
          {
            coordinación.map(
              (coordinador) => (
                <TestimonialAvatar
                  src={coordinador.img ?? ''}
                  name={coordinador.name}
                  title={coordinador.title}
                />
              ))
          }
        </SimpleGrid>
      </Section>
      <Section>
        <Heading>Tribunal</Heading>
        <SimpleGrid minChildWidth="160px">
          {
            coordinación.map(
              (coordinador) => (
                <TestimonialAvatar
                  src={coordinador.img ?? ''}
                  name={coordinador.name}
                  title={coordinador.title}
                />
              ))
          }
        </SimpleGrid>
      </Section>
    </Layout>
  )
}

const coordinación = [
  {
    name: 'Sabina Orellana',
    title: 'Coordinadora General',
  },
  {
    name: "Diego Aguilera",
    title: "Encargado de Finanzas",
  }
];

export default WhoWeArePage
