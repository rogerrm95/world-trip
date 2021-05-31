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

        <Stack
          backgroundImage={'/background.png'}
          width='100%'
          height='275px'
          px='20'
          py='16'
          spacing='5'
          color='gray.50'>

          <Text fontWeight='medium' fontSize='36'>
            5 Continentes,<br />infinitas possibilidades.
          </Text>

          <Text fontSize='18' fontWeight='normal'>
            Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.
          </Text>

          {/*           <Image
            src='/airplane.svg'
            alt='Avião'
            position='absolute'
            right='16'
            bottom='-10'
            width='400px' /> */}
        </Stack>

        <HStack justify='space-between' mt='20' spacing='16'>
          <IconTravel label='Vida noturna' src='/cocktail.svg' alt='vida noturna' />
          <IconTravel label='Praia' src='/beach.svg' alt='praia' />
          <IconTravel label='Moderno' src='/building.svg' alt='moderno' />
          <IconTravel label='Clássico' src='/museum.svg' alt='clássico' />
          <IconTravel label='E mais...' src='/earth.svg' alt='e mais...' />
        </HStack>

        <Divider maxWidth='90px' mt='20' borderColor='gray.600' />

        <Box mt='14' textAlign='center' fontSize='4xl'>
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
