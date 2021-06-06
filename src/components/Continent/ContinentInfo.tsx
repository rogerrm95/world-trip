import { Box, Icon, Flex, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from 'react-icons/ri'

interface ContinentInfoProps {
    description: string
}

export function ContinentInfo({ description }: ContinentInfoProps) {
    return (
        <SimpleGrid columns={2}>
            <Flex textAlign='justify' lineHeight='9' dangerouslySetInnerHTML={{ __html: description }} />

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
                    <Text fontWeight='bold'>
                        cidades 100+
                        <Tooltip label='Cidades mais turísticas do mundo' bg="gray.300" color="black" hasArrow>
                            <Box as='span' ml='2'>
                                <Icon as={RiInformationLine} boxSize='20px'/>
                            </Box>
                        </Tooltip>
                    </Text>
                </Box>
            </Stack>
        </SimpleGrid>
    )
}