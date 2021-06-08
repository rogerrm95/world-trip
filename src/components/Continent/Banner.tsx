import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerProps {
    name: string,
    url: string,
    alt?: string,
}

export function Banner({
    name,
    url,
    alt = '',
}: BannerProps) {

    const isWideVersion = useBreakpointValue({
        lg: true,
        md: true,
        sm: true
    })


    return (
        <Box width='100%' position='relative'>
            <Image
                src={url}
                alt={alt}
                objectFit={['cover', 'cover']}
                width='inherit'
                height={['175', '300', '600']}
            />

            <Flex
                position='absolute'
                width='100%'
                height='100%'
                backgroundColor='#00000076'
                top='0'
                display='flex'
                align={['center', 'center', 'flex-end']}
                justify={['center', 'center', 'flex-start']}
                pl={['0', '0', '36']}
                pb={['0', '0', '14']}>

                <Text
                    fontSize={['1.75rem', '1.75rem', '3rem']}
                    fontWeight='semibold'
                    color='gray.50'>
                    {name}
                </Text>
            </Flex>
        </Box>
    )
}