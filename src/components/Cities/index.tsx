import { SimpleGrid } from "@chakra-ui/react"
import { CityCard } from "./CityCard"

interface CitiesProps {
    cities: City[]
}

type City = {
    url: string,
    city: string,
    country: string,
    zipCodeOfFlag: string
}

export function Cities({ cities }: CitiesProps) {
    return (
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
    )
}