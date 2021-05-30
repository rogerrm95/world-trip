import { Flex, Image, ImageProps, Text } from "@chakra-ui/react";

interface IconTravelProps extends ImageProps {
    label: string,
}

export function IconTravel({ label, ...rest }: IconTravelProps) {
    return (
        <Flex direction='column'>
            <Image src='/cocktail.svg' alt='vida noturna' height='85px' {...rest} />
            <Text fontSize='1.5rem' color='gray.600' fontWeight='600' mt='6'>
                {label}
            </Text>
        </Flex>
    )
}