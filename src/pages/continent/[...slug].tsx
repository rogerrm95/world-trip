import { GetServerSideProps } from "next";
import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";

import { CircleFlag } from 'react-circle-flags'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Cities } from "../../components/Cities";

interface CitiesData {
    data: {
        url: string,
        alt: string,
        name: string,
        description: string,
        cities: []
    }
}

export default function ContinentPage({ data }: CitiesData) {

    return (
        <Flex align='center' justify='center' direction='column' width='100%' p='0'>
            <Header />

            <Box width='100%' position='relative'>
                <Image src='/europe.jpg' alt={data.alt} objectFit='cover' width={1300} height={600} />

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
                        {data.name}
                    </Text>
                </Box>
            </Box>

            <Box width='100%' maxWidth='900px' mt='5rem'>
                <SimpleGrid columns={2}>
                    <Flex textAlign='justify' lineHeight='9' dangerouslySetInnerHTML={{ __html: data.description }} />

                    <Stack spacing='10' align='center' justify='center' direction='row'>
                        <Box>
                            <Text textAlign='center' fontSize='5xl' color='yellow.500'>50</Text>
                            <Text fontWeight='bold'> países </Text>
                        </Box>
                        <Box>
                            <Text textAlign='center' fontSize='5xl' color='yellow.500'>47</Text>
                            <Text fontWeight='bold'> línguas </Text>
                        </Box>
                        <Box>
                            <Text textAlign='center' fontSize='5xl' color='yellow.500'>27</Text>
                            <Text fontWeight='bold'> cidades 100+ </Text>
                        </Box>
                    </Stack>
                </SimpleGrid>

                <Text as='h2' fontSize='4xl' fontWeight='medium' mt='20'>
                    Cidades +100
                </Text>

                <Cities cities={data.cities} />
            </Box>
            <Footer />
        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

    const { slug } = params
    const uidInPrismic = `continent-${String(slug)}`
    console.log(uidInPrismic)
    const response = await getPrismicClient().getByUID('continents', uidInPrismic, {}).then(res => res)

    if (!response) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const data = {
        url: response.data.banner.url,
        alt: response.data.banner.alt,
        name: RichText.asText(response.data.name),
        description: RichText.asHtml(response.data.description),
        cities: response.data.cities.map(item => ({
            url: item.photo.url,
            city: RichText.asText(item.title),
            country: item.country,
            zipCodeOfFlag: String(item.code).toUpperCase()
        }))
    }

    console.log(data.description)


    return {
        props: {
            data
        }
    }
}