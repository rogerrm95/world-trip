import { Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";


export function BannerHome() {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true
    })
    return (
        <Stack
            position='relative'
            backgroundImage={'/background.png'}
            width='100%'
            height='275px'
            pl={{ base: '4', md: '20', lg: '36' }}
            spacing='5'
            color='gray.50'
            align='flex-start'
            justify='center'>

            <Text fontWeight='medium' fontSize={{ base: '28px', md: '36px', lg: '36px' }}>
                5 Continentes,<br />infinitas possibilidades.
            </Text>

            <Text
                fontWeight='normal'
                fontSize={{ base: '18px', md: '24px', lg: '24px' }}
                maxWidth={{ lg: '50%' }}>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>

            {isWideVersion && (
                <Image
                    src='/airplane.svg'
                    alt='Avião'
                    position='absolute'
                    right='16'
                    bottom='-10'
                    width='375px' />
            )}
        </Stack>
    )
}