'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
// import { PiStarFourBold } from 'react-icons/pi'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { heroList } from '@/const/home'
import {
  Box,
  Button,
  Heading,
  // List,
  // ListIcon,
  // ListItem,
  // SimpleGrid,
  Text,
  VStack,
} from '@/theme/chakra'

import styles from './Hero.module.css'

function Hero() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const t = useTranslations('Index')

  const prevto = () => {
    if (!swiper) return
    if (swiper.activeIndex === 0) return swiper.slideTo(heroList.length - 1)
    return swiper.slidePrev()
  }
  const nexto = () => {
    if (!swiper) return
    if (swiper.activeIndex === heroList.length - 1) return swiper.slideTo(0)
    return swiper.slideNext()
  }

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        allowTouchMove={false}
        navigation
        modules={[EffectFade, Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        // onActiveIndexChange={onActiveIndexChange}
        className={styles.swiper}
        onSwiper={(s: SwiperType): void => {
          setSwiper(s)
        }}
      >
        {heroList.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Box
                pos="absolute"
                zIndex={3}
                w="full"
                height="full"
                background="linear-gradient(0deg, rgba(10, 49, 97, 0.60) 0%, rgba(10, 49, 97, 0.10) 100%)"
              ></Box>
              <Image
                src={item.imgUrl}
                alt=""
                fill
                style={{
                  objectFit: 'cover', // cover, contain, none
                }}
                quality={100}
                priority={item.id === 'hero-1' ? true : false}
              />
              <VStack
                pos="absolute"
                zIndex={3}
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%,-50%)'}
                color="white"
                textAlign="center"
                spacing={{ base: 10, lg: 3 }}
                w={'full'}
                maxW={1200}
                px={4}
              >
                <Heading
                  fontSize={{ base: '5xl', lg: '7xl' }}
                  fontWeight="bold"
                >
                  {t(item.title)}
                </Heading>
                <Text fontSize={{ base: 'xl', lg: '3xl' }}>{t(item.desc)}</Text>
                {/* <List spacing={3} textAlign="start" pt={12} w="100%" maxW={900}>
                  <SimpleGrid columns={2} gap={4}>
                    {item.list.map(li => (
                      <ListItem
                        key={li}
                        fontFamily="heading"
                        fontSize={{ base: 'sm', lg: 'md' }}
                      >
                        <ListIcon as={PiStarFourBold} color="brand.gold" />
                        {t(li)}
                      </ListItem>
                    ))}
                  </SimpleGrid>
                </List> */}
              </VStack>
            </SwiperSlide>
          )
        })}
        <Button
          pos="absolute"
          zIndex={3}
          bottom={{ base: 12, lg: '50%' }}
          left={{ base: '50%', lg: 8 }}
          transform={{ base: 'translate(-120%,0)', lg: 'translate(0,50%)' }}
          colorScheme="brand"
          color="white"
          padding={0}
          w={{ base: 12, lg: 14 }}
          h={{ base: 12, lg: 14 }}
          variant="outline"
          borderRadius={50}
          onClick={prevto}
        >
          <AiOutlineArrowLeft style={{ fontSize: 32 }} />
        </Button>
        <Button
          pos="absolute"
          zIndex={3}
          bottom={{ base: 12, lg: '50%' }}
          right={{ base: '50%', lg: 8 }}
          transform={{ base: 'translate(120%,0)', lg: 'translate(0,50%)' }}
          colorScheme="brand"
          color="white"
          padding={0}
          w={{ base: 12, lg: 14 }}
          h={{ base: 12, lg: 14 }}
          variant="outline"
          borderRadius={50}
          onClick={nexto}
        >
          <AiOutlineArrowRight style={{ fontSize: 32 }} />
        </Button>
      </Swiper>
    </Box>
  )
}

export default Hero
