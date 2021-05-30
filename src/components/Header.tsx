import { Box, Flex, Image} from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
    return (
        <Flex p='4'>
            <Link href='/' passHref>
                <Box as='a'>
                    <Image src='/logo.svg' alt='Logo'/>
                </Box>
            </Link>
        </Flex>
    )
}