import { GetServerSideProps } from "next";
import Head from "next/head";
import { Flex, Text, Image, Box, Stack, HStack, Divider } from "@chakra-ui/react";

// CMS  //
import { getPrismicClient } from "../services/prismic";
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

// Componentes //
import { Header } from "../components/Header";
import { IconTravel } from "../components/IconTravel";
import { Slider } from "../components/Slider";
import { Footer } from "../components/Footer";
import { BannerHome } from "../components/BannerHome";


interface HomeProps {
  photos: Photo[]
}

type Photo = {
  continent: string
  description: string,
  url: string,
  alt?: string
}

export default function Home({ photos }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | World-Trip</title>
      </Head>

      <Flex align='center' justify='center' direction='column' width='100%' p='0'>

        <Header />

        <BannerHome />

        <HStack 
          justify='center'
          mt={{ lg: '20', md: '9', sm: '9' }}
          spacing={{lg: '16', md: '12', sm: '4'}}
          flexWrap='wrap'>
          <IconTravel label='Vida noturna' src='/cocktail.svg' alt='vida noturna' />
          <IconTravel label='Praia' src='/beach.svg' alt='praia' />
          <IconTravel label='Moderno' src='/building.svg' alt='moderno' />
          <IconTravel label='Clássico' src='/museum.svg' alt='clássico' />
          <IconTravel label='E mais...' src='/earth.svg' alt='e mais...' />
        </HStack>

        <Divider maxWidth='90px' mt='20' borderColor='gray.600' border={{ lg: '2px', sm: '1px' }} />

        <Box mt='14' textAlign='center' fontSize={{ lg: '4xl', md: '2xl', sm: 'xl' }}>
          <Text>Vamos nessa?<br />Então escolha seu continente</Text>
        </Box>

        <Slider photos={photos} />

        <Footer />
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (req) => {

  const content = await getPrismicClient().query([Prismic.Predicates.at('document.type', 'home')], {
    pageSize: 15
  })

  const response = content.results.map(item => item)

  const photos = response[0].data.slider.map(item => (
    {
      alt: item.photo.alt ? item.photo.alt : null,
      url: item.photo.url,
      continent: item.continent,
      description: item.description
    }
  ))

  return {
    props: {
      photos
    }
  }
}
