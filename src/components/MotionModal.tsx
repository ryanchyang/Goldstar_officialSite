'use client'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { PiStarFourBold } from 'react-icons/pi'

import { Button } from '@/theme/chakra'
import { Box, Flex, List, ListIcon, ListItem, Text } from '@/theme/chakra'

type CardDataType = {
  id: string
  cover: string
  title: string
  desc: string
  content: string[]
}

type MotionModalProp = {
  isOpen: boolean
  close: () => void
  data?: CardDataType | null
}

function MotionModal({ isOpen, close, data }: MotionModalProp) {
  const t = useTranslations('Index')

  useEffect(() => {
    if (isOpen)
      return document.querySelector('body').classList.add('motion-modal-open')
    return document.querySelector('body').classList.remove('motion-modal-open')
  }, [isOpen])

  return (
    <div>
      {isOpen && data && (
        <m.div className="motion-modal-wrap">
          <m.div
            className="motion-modal-mask"
            animate={{ opacity: data?.id ? 0.6 : 0 }}
            onClick={close}
          ></m.div>
          <m.div layoutId={data.id} className="motion-modal">
            <Box
              pos="relative"
              w="fill"
              aspectRatio={480 / 252}
              borderRadius="29px 29px 0 0"
              overflow="hidden"
            >
              <Image
                src={data.cover}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Flex
              direction="column"
              gap={{ base: 3, lg: 4 }}
              p={8}
              maxHeight={350}
              overflow="scroll"
            >
              {/* <Box fontSize={{ base: 24, lg: 40 }}>{iconsDict[item.title]}</Box> */}
              <Flex justify="space-between" align="center">
                <Box
                  as={m.div}
                  fontSize={{ base: 'xl', lg: '3xl' }}
                  fontWeight={{ base: 'medium' }}
                >
                  {t(data.title)}
                </Box>
              </Flex>
              <Box>{t(data.desc)}</Box>
              <Box>
                <List spacing={1}>
                  {data.content.map(item => (
                    <ListItem key={item} fontSize={{ base: 'sm', lg: 'md' }}>
                      <ListIcon as={PiStarFourBold} color="brand.gold" />
                      {t(item)}
                    </ListItem>
                  ))}
                </List>
                {/* <Text fontSize={{ base: 'sm', lg: 'md' }}>{t(data.desc)}</Text> */}
              </Box>
            </Flex>
            <div className="motion-modal__close-btn">
              <Button size="lg" style={{ padding: '8px 24px' }} onClick={close}>
                {t('close')}
              </Button>
            </div>
          </m.div>
        </m.div>
      )}
    </div>
  )
}

export default MotionModal
