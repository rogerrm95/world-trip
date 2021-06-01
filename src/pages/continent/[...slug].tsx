import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";

import { Header } from "../../components/Header";

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

            </Box>

            <Footer />
        </Flex>
    )
}