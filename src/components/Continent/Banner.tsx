import { Box, Image, Text } from "@chakra-ui/react";

interface BannerProps {
    name: string,
    url: string,
    alt?: string,
    width?: number,
    height?: number,
}

export function Banner({
    name,
    url,
    alt = '',
    width = 1300,
    height = 600
}: BannerProps) {
    return (
        <Box width='100%' position='relative'>
            <Image src={url} alt={alt} objectFit='cover' width={width} height={height} />
            <Box
                position='absolute'
                width='100%'
                height='100%'
                backgroundColor='#00000076'
                top='0'
                display='flex'
                alignItems='flex-end'
                pl='36'
                pb='14'>
                <Text fontSize='3rem' fontWeight='semibold' color='gray.50'>
                    {name}
                </Text>
            </Box>
        </Box>
    )
}