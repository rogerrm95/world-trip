import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";

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
                    <Text fontWeight='bold'> cidades 100+ </Text>
                </Box>
            </Stack>
        </SimpleGrid>
    )
}