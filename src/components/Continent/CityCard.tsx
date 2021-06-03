import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";

interface CityCardProps {
    url: string,
    city: string,
    country: string,
    zipCodeOfFlag: string
}

export function CityCard({ url, city, country, zipCodeOfFlag }: CityCardProps) {
    return (
        <Box
            width='256px'
            height='279px'
            borderRadius={10}
            bg='blackAlpha.50'
            flexDirection='column'>
            <Image src={url} alt='Londres' width={300} borderTopRadius={10} />

            <Flex
                height='106px'
                display='flex'
                flexDirection='column'
                align='flex-start'
                border='1px'
                position='relative'
                borderColor='yellow.200'
                pl='6'
                pt='4'>

                <Text fontSize='xl' fontWeight='semibold'>{city}</Text>

                <Text color='gray.300' mt='3'>{country}</Text>

                <CircleFlag
                    countryCode={zipCodeOfFlag.toLowerCase()}
                    width='40px'
                    style={{
                        position: 'absolute',
                        right: '24px',
                        bottom: '38px'
                    }} />
            </Flex>
        </Box>
    )
}