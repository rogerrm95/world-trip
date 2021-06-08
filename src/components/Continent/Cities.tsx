import { Box, extendTheme, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { CityCard } from "./CityCard"

interface CitiesProps {
    cities: City[],
    label: string
}

type City = {
    url: string,
    city: string,
    country: string,
    zipCodeOfFlag: string
}

export function Cities({ cities, label }: CitiesProps) {

    const isWideVersion = useBreakpointValue({
        xl: false,
        ls: false,
        md: true,
        sm: true
    })

    return (

        <Box mt={[9, 10, 20]}>
            <Text as='h2' fontSize='4xl' fontWeight='medium'>
                {label}
            </Text>

            <SimpleGrid
                my='10'
                spacingY='6'
                alignItems='center'
                justifyContent='center'
                columns={[1, 1, 2, 3]}>
                {
                    cities.map((item, index: number) => (
                        <CityCard
                            key={index}
                            city={item.city}
                            url={item.url}
                            country={item.country}
                            zipCodeOfFlag={item.zipCodeOfFlag}
                        />
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}