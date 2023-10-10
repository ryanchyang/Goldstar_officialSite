'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { flowEb3 } from '@/const/eb3'
import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@/theme/chakra'

import SectText from '../SectText'
import FlowStepper from './FlowStepper'

function Flow() {
  const t = useTranslations('Eb3')

  return (
    <Container
      pos="relative"
      p={4}
      pt={{ base: '100px', md: '127px' }}
      pb={'92px'}
      maxW={1200}
    >
      <Box maxW={579} pb={10}>
        <SectText
          item={{
            intro: 'flow_intro',
            title: 'flow_title',
            desc: 'flow_desc',
            sectType: 'Eb3',
          }}
        />
      </Box>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={20}>
        <Box>
          <Flex direction="column" fontFamily="heading" mb={10}>
            {/* <Text
              as={'h4'}
              fontSize={{ base: '2xl', lg: '3xl' }}
              color="brand.blue"
            >
              {t('case_1')}
            </Text>
            <Text fontSize={{ base: 'xl', lg: 'xl' }}>{t('case_1_desc')}</Text> */}
          </Flex>
          <FlowStepper list={flowEb3} />
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Flow
