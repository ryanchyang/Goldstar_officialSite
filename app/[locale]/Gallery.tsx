'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { PiStarFourBold } from 'react-icons/pi'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { hiltonImgList } from '@/const/home'
import { Box, Button, Heading, VStack } from '@/theme/chakra'

import styles from './Hero.module.css'

function Gallery() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const t = useTranslations('Index')

  const prevto = () => {
    if (!swiper) return
    if (swiper.activeIndex === 0)
      return swiper.slideTo(hiltonImgList.length - 1)
    return swiper.slidePrev()
  }
  const nexto = () => {
    if (!swiper) return
    if (swiper.activeIndex === hiltonImgList.length - 1)
      return swiper.slideTo(0)
    return swiper.slideNext()
  }

  return (
    <Box pb={'150px'}>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        effect="fade"
        allowTouchMove={false}
        navigation
        modules={[EffectFade, Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        // onActiveIndexChange={onActiveIndexChange}
        className={styles.gallery}
        onSwiper={(s: SwiperType): void => {
          setSwiper(s)
        }}
      >
        {hiltonImgList.map(item => {
          return (
            <SwiperSlide key={item.id} className={styles['gallery-slide']}>
              <Image
                src={item.imgUrl}
                alt=""
                fill
                style={{
                  objectFit: 'contain', // cover, contain, none
                }}
              />
              <VStack
                pos="absolute"
                zIndex={3}
                bottom={'0%'}
                right={'30px'}
                transform={'translate(0%,0%)'}
                color="white"
                textAlign="center"
                spacing={{ base: 10, lg: 3 }}
                px={4}
              >
                <Heading
                  fontSize={{ base: '5xl', lg: '7xl' }}
                  fontWeight="medium"
                >
                  {t(item.title)}
                </Heading>
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

export default Gallery
