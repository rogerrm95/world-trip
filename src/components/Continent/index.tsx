import { Box, Flex } from "@chakra-ui/react";

// Componentes //
import { Banner } from "./Banner";
import { Cities } from "./Cities";
import { ContinentInfo } from "./ContinentInfo";

interface ContinentPageProps {
    data: {
        name: string,
        alt?: string,
        url: string,
        description: string,
        cities: []
    }
}

export function Continent({ data }: ContinentPageProps) {
    return (
        <Flex direction='column' align='center' width='100%'>
            <Banner name={data.name} alt={data.alt} url={data.url} />

            <Box width='100%' maxWidth='900px' mt='5rem'>
                <ContinentInfo description={data.description} />

                <Cities cities={data.cities} label='cidades 100+' />
            </Box>
        </Flex>
    )
}