import { Flex, Icon, Image, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Flex bg='gray.100' width='100%' p='4' align='center' justify='space-between' boxShadow='dark-lg'>

            <Image src='/logo.svg' alt='logo' width={100} />

            <Text display='flex' flexDirection='row' fontSize={{ lg: 'md', sm: 'sm' }}>
                Producted with ❤️ by
                <Text color='gray.600' fontWeight='bold' ml='1'>
                    Roger Marques
                </Text>
            </Text>

            <Text fontWeight='bold' fontSize={{ lg: 'lg', sm: 'md' }}>
                2021
            </Text>

        </Flex>
    )
}