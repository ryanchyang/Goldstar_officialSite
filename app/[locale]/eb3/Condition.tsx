'use client'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { PiStarFourBold } from 'react-icons/pi'

import { conditionList } from '@/const/eb3'
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

import SectText from '../SectText'

function Condition() {
  const t = useTranslations('Eb3')

  return (
    <>
      <Container
        maxW={1200}
        p={4}
        pt={{ base: '100px', md: '127px' }}
        pb={'50px'}
      >
        <SectText
          item={{
            intro: 'flow_intro',
            title: 'apply_condition',
            sectType: 'Eb3',
            // desc: 'projection_desc',
          }}
        />
        <List spacing={1} my={6}>
          {conditionList.map(li => (
            <ListItem key={li} fontSize={{ base: 'sm', lg: 'md' }}>
              <ListIcon as={PiStarFourBold} color="brand.gold" />
              {t(li)}
            </ListItem>
          ))}
        </List>
        <Text>{t('condition_note_1')}</Text>
      </Container>
    </>
  )
}

export default Condition
