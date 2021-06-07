import { Flex, Image, ImageProps, Text, useBreakpointValue } from "@chakra-ui/react";

interface IconTravelProps extends ImageProps {
    label: string,
}

export function IconTravel({ label, ...rest }: IconTravelProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true,
    })
    return (
        <Flex direction={['row', 'row', 'column']} align='center' justify='center'>
            <Image height='85px' display={isWideVersion ? 'block' : 'none'} {...rest} />

            <Image
                src='/ellipse.svg'
                display={isWideVersion ? 'none' : 'block'}
                width='4' />

            <Text
                fontSize={{ lg: 'xl', md: 'lg', sm: 'md' }}
                color='gray.600'
                fontWeight='600'
                mt={['0', '0', '6']}
                ml={['1', '2', '0']}>
                {label}
            </Text>
        </Flex>
    )
}