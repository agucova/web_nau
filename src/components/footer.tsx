import * as React from 'react'

import type { NavProps } from './navbar'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from 'gatsby';
import Logo from './logo';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer({ navItems, twitterUsername, instagramUsername, youtubeUsername }: FooterProps) {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo size={50} />
                <Stack direction={'row'} spacing={6}>
                    {
                        navItems.map(navItem => (
                            <Link to={navItem.link}>
                                <Text>{navItem.name}</Text>
                            </Link>
                        ))
                    }
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>Nueva Acción Universitaria UC | 2022</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={`https://twitter.com/${twitterUsername}`} >
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={`https://instagram.com/${instagramUsername}`}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={`https://youtube.com/channel/${youtubeUsername}`}>
                            <FaYoutube />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

interface FooterProps extends NavProps {
    instagramUsername: string;
    twitterUsername: string;
    youtubeUsername: string;
}
