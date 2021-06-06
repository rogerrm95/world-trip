import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CircleFlag } from "react-circle-flags";

interface CityCardProps {
    url: string,
    city: string,
    country: string,
    zipCodeOfFlag: string
}

export function CityCard({ url, city, country, zipCodeOfFlag }: CityCardProps) {

    const limitToWrap = city.length

    return (
        <Box
            width='256px'
            height='279px'
            borderRadius={10}
            bg='white'
            flexDirection='column'>

            <Image src={url} alt={city} width={300} height='173px' borderTopRadius={10} />

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

                { // Quebra de linha //
                    limitToWrap >= 12
                        ? (
                            <>
                                <Text fontSize='lg' fontWeight='semibold' maxWidth='70%'lineHeight='1.25' >{city}</Text>

                                <Text color='gray.300' mt='2'>{country}</Text>
                            </>
                        )
                        : (
                            <>
                                <Text fontSize='xl' fontWeight='semibold'>{city}</Text>

                                <Text color='gray.300' mt='3'>{country}</Text>
                            </>
                        )
                }

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