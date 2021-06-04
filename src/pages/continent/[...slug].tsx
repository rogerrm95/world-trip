import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";

import { CircleFlag } from 'react-circle-flags'

import { Footer } from "../../components/Footer";
import { Continent } from "../../components/Continent";
import { Header } from "../../components/Header";

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
        <>
            <Head>
                <title>{`${data.name} | World-Trip`}</title>
            </Head>

            <Flex align='center' justify='center' direction='column' width='100%' p='0'>
                <Header />

                <Continent data={data} />

                <Footer />
            </Flex>
        </>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug } = params
    console.log(slug)
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

    return {
        props: {
            data
        },
        revalidate: 60 * 60 * 4 // 4 horas
    }
}