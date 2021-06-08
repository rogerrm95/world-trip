import { Box, Grid, Icon, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FiArrowLeft } from 'react-icons/fi'

export function Header() {

    const { back, asPath } = useRouter()
    const isHome: boolean = asPath === '/'

    return (
        <Grid
            templateColumns={isHome ? '1fr' : '25px 1fr'}
            width='100%'
            p='4'
            alignItems='center'
            justifyContent='center'>

            {
                !isHome && (
                    <Icon
                        as={FiArrowLeft}
                        cursor='pointer'
                        boxSize='1.25rem'
                        _hover={{ opacity: '0.8' }}
                        onClick={back}
                    />
                )
            }

            <Link href='/' passHref>
                <Box as='a' justifySelf='center'>
                    <Image src='/logo.svg' alt='Logo' />
                </Box>
            </Link>
        </Grid>
    )
}