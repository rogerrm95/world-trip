import { SimpleGrid, Text } from "@chakra-ui/react"
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
    return (

        <>
            <Text as='h2' fontSize='4xl' fontWeight='medium' mt='20'>
                {label}
            </Text>

            <SimpleGrid my='10' spacing={4} align='flex-start' columns={3}>
                {
                    cities.map(item => (
                        <CityCard
                            city={item.city}
                            url={item.url}
                            country={item.country}
                            zipCodeOfFlag={item.zipCodeOfFlag}
                        />
                    ))
                }
            </SimpleGrid>
        </>
    )
}