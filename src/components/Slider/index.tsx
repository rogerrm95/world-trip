import { ReactElement } from "react";
import Link from 'next/link'
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
    photos?: Photo[],
}

type Photo = {
    continent: string
    description: string,
    url: string,
    alt?: string
}


export function Slider({ photos }: SliderProps) {

    return (
        <Flex width='100%' maxWidth='1200px' height='450px' my='14'>
            <Swiper pagination navigation speed={500} style={{ borderRadius: '2px' }}>
                {
                    photos.map(photo => (
                        <SwiperSlide key={photo.continent}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>

                            <Image
                                src={photo.url}
                                alt={photo.alt}
                                objectFit='cover'
                                width={{ base: 800, md: 1024, lg: 1440 }}
                                height='inherit' />

                            <Box
                                position='absolute'
                                display='flex'
                                flexDirection='column'
                                align='center'
                                justifyContent='center'
                                backgroundColor='#00000088'
                                width='100%'
                                height='100%'>

                                <Link href={`continent/${photo.alt}`} passHref>
                                    <Text 
                                        color='gray.50'
                                        fontSize='4xl'
                                        fontWeight='bold'
                                        as='a'>
                                        {photo.continent}
                                    </Text>
                                </Link>

                                <Text
                                    color='gray.50'
                                    fontWeight='bold'
                                    fontSize={{lg: '2xl', md: 'xl', base: 'lg'}}>
                                    {photo.description}
                                </Text>
                            </Box>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Flex>
    )
}