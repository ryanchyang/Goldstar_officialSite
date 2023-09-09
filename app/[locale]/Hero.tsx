'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { heroList } from '@/const/home'
import { Button, Heading, Text, VStack } from '@/theme/chakra'

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
    <>
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
              <Image
                src={item.imgUrl}
                alt=""
                fill
                style={{
                  objectFit: 'cover', // cover, contain, none
                }}
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
              >
                <Heading
                  fontSize={{ base: '5xl', lg: '7xl' }}
                  fontWeight="medium"
                >
                  {t(item.title)}
                </Heading>
                <Text fontSize={{ base: 'xl', lg: '2xl' }}>{t(item.desc)}</Text>
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
    </>
  )
}

export default Hero
