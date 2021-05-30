import { GetServerSideProps } from "next";
import Head from "next/head";

import { Flex, Text, Image, Box, Stack } from "@chakra-ui/react";

// CMS  //
import { getPrismicClient } from "../services/prismic";
import Prismic from '@prismicio/client'

// Componentes //
import { Header } from "../components/Header";

export default function Home() {
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

          <Image
            src='/airplane.svg'
            alt='Avião'
            position='absolute'
            right='16'
            bottom='-10'
            width='400px' />

        </Stack>
      </Flex>
    </>
  )
}

/* export const getServerSideProps: GetServerSideProps = async (req) => {

  const content = await getPrismicClient().query([Prismic.Predicates.at('document.type', 'continents')], {
    pageSize: 15
  })

  const response = content.results.map(item => item)

  return {
    props: {}
  }
} */
