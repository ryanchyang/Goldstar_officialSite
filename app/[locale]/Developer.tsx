'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { PiStarFourBold } from 'react-icons/pi'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { developerList } from '@/const/home'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@/theme/chakra'

import SectText from './SectText'
function Developer() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const t = useTranslations('Index')

  const prevto = () => {
    if (!swiper) return
    if (swiper.activeIndex === 0)
      return swiper.slideTo(developerList.length - 1)
    return swiper.slidePrev()
  }
  const nexto = () => {
    if (!swiper) return
    if (swiper.activeIndex === developerList.length - 1)
      return swiper.slideTo(0)
    return swiper.slideNext()
  }

  return (
    <Container pos="relative" p={4} pb={'150px'} maxW={1200}>
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
        // className={styles.swiper}
        onSwiper={(s: SwiperType): void => {
          setSwiper(s)
        }}
      >
        {developerList.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                // maxW={892}
                minH={350}
                gap={{ base: 4 }}
                pb={{ base: 30, lg: 30 }}
                bg={'white'}
                zIndex={3}
              >
                <Box maxW={500}>
                  <SectText item={{ title: 'dev_title' }} />
                  <Box as="h4" fontSize={{ base: '2xl', lg: '3xl' }} mb={6}>
                    {t(item.title)}
                  </Box>
                  <List spacing={1} mb={6}>
                    {item.list.map(li => (
                      <ListItem key={li} fontSize={{ base: 'sm', lg: 'md' }}>
                        <ListIcon as={PiStarFourBold} color="brand.gold" />
                        {t(li)}
                      </ListItem>
                    ))}
                  </List>
                  <HStack spacing={{ base: 4, lg: 8 }}>
                    <Button
                      colorScheme="brand"
                      color="brand.blue"
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
                      colorScheme="brand"
                      color="brand.blue"
                      padding={0}
                      w={{ base: 12, lg: 14 }}
                      h={{ base: 12, lg: 14 }}
                      variant="outline"
                      borderRadius={50}
                      onClick={nexto}
                    >
                      <AiOutlineArrowRight style={{ fontSize: 32 }} />
                    </Button>
                  </HStack>
                </Box>

                <Box aspectRatio={5 / 2} pos="relative" w="full">
                  <Image
                    src={item.imgUrl}
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                </Box>
              </Flex>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Developer
