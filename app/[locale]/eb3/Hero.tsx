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

import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@/theme/chakra'

import styles from './Hero.module.css'

function Hero() {
  const t = useTranslations('Eb3')

  return (
    <>
      <div className={styles.hero}>
        <Image
          src={'/images/common/jeremy-dorrough-wdtF-f4qBdU-unsplash.jpg'}
          alt=""
          fill
          style={{
            zIndex: 1,
            objectFit: 'cover', // cover, contain, none
          }}
          priority={true}
        />
        <Box
          pos="absolute"
          zIndex={3}
          w="full"
          height="full"
          background="linear-gradient(
    180deg,
    rgba(10, 49, 97, 0.05) 0%,
    rgba(10, 49, 97, 0.3) 53.12%,
    rgba(9, 30, 56, 0.8) 100%
  )"
        ></Box>
        <Container maxW={1200} pt={{ base: 150, sm: 200, md: 220 }}>
          <VStack
            pos="relative"
            zIndex={3}
            maxW={890}
            //   top={'50%'}
            // /          left={'50%'}
            //   transform={'translate(-50%,-50%)'}
            color="white"
            align="flex-start"
            spacing={{ base: 6, lg: 8 }}
            fontSize={{ base: 'sm', md: 'md' }}
            fontFamily="heading"
          >
            <Flex direction="column" gap={{ base: 4, lg: 6 }}>
              <Heading
                textAlign={{ base: 'center', md: 'start' }}
                fontSize={{ base: '5xl', lg: '6xl' }}
                fontWeight="medium"
              >
                {t('hero_title')}
              </Heading>
              <Text>{t('hero_desc_1')}</Text>
            </Flex>
            <Flex direction="column">
              <List spacing={1}>
                <ListItem>
                  <ListIcon as={AiOutlineArrowRight} color="white" />
                  {t('hero_desc_2_li_1')}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineArrowRight} color="white" />
                  {t('hero_desc_2_li_2')}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineArrowRight} color="white" />
                  {t('hero_desc_2_li_3')}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineArrowRight} color="white" />
                  {t('hero_desc_2_li_4')}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineArrowRight} color="white" />
                  {t('hero_desc_2_li_5')}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineArrowRight} color="white" />
                  {t('hero_desc_2_li_6')}
                </ListItem>
              </List>
            </Flex>
          </VStack>
        </Container>
      </div>
    </>
  )
}

export default Hero
