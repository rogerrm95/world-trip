import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";

import { CircleFlag } from 'react-circle-flags'

export default function ContinentPage() {
    return (
        <Flex align='center' justify='center' direction='column' width='100%' p='0'>
            <Header />

            <Box width='100%' position='relative'>
                <Image src='/europe.jpg' alt='Europa' objectFit='cover' width={1300} height={600} />

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
                        Europa
                    </Text>
                </Box>
            </Box>

            <Box width='100%' maxWidth='900px' mt='5rem'>
                <SimpleGrid columns={2}>
                    <Text textAlign='justify' lineHeight='9'>
                        A Europa é, por convenção, um dos seis continentes do mundo.
                        Compreendendo a península ocidental da Eurásia,
                        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                    </Text>

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

                <SimpleGrid my='10' spacing={4} align='flex-start' columns={3}>
                    <Box
                        width='256px'
                        height='279px'
                        borderRadius={10}
                        bg='blackAlpha.50'
                        flexDirection='column'>
                        <Image src='/londres.jpg' alt='Londres' width={300} borderTopRadius={10} />

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
                            <Text fontSize='xl' fontWeight='semibold'>Londres</Text>
                            <Text color='gray.300' mt='3'>Reino Unido</Text>
                            <CircleFlag 
                                countryCode='gb'
                                width='40px'
                                style={{
                                    position:'absolute',
                                    right: '24px',
                                    bottom: '38px'}}/>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Box>
            <Footer />
        </Flex>
    )
}