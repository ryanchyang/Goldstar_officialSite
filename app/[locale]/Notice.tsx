'use client'

import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { LuFerrisWheel, LuMountainSnow } from 'react-icons/lu'
import { MdExpandMore } from 'react-icons/md'
import { RiGraduationCapLine } from 'react-icons/ri'

import MotionModal from '@/components/MotionModal'
import { noticeData } from '@/const/home'
import { Box, Button, Container, Flex, SimpleGrid, Text } from '@/theme/chakra'

// const iconsDict: { [key: string]: JSX.Element } = {
//   great_location: <GoLocation />,
//   nice_school: <RiGraduationCapLine />,
//   housing: <BsHouseDoor />,
//   nature: <LuMountainSnow />,
//   attraction: <LuFerrisWheel />,
//   mall: <HiOutlineShoppingBag />,
// }
import SectText from './SectText'

type CardDataType = {
  id: string
  cover: string
  title: string
  desc: string
  content: string[]
}

function Notice() {
  const t = useTranslations('Index')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedCard, setSelectedCard] = useState<CardDataType | null>(null)
  return (
    <Container
      pos="relative"
      //   p={4}
      pb={'150px'}
      maxW={1200}
    >
      <Box textAlign="center" maxW={892} mx={'auto'} pb={{ base: 30, lg: 70 }}>
        <SectText item={noticeData.text} />
      </Box>
      <SimpleGrid columns={[1, null, 2, 2]} spacing={[4, null, null, 10]}>
        {/* card */}
        {noticeData.list.map(item => (
          <Box
            as={m.div}
            layoutId={item.id}
            key={item.id}
            borderRadius={20}
            boxShadow="md"
            border="1px solid #E3E2E6"
            bg="white"
            overflow="hidden"
            style={selectedCard?.id === item.id ? { zIndex: 999 } : {}}
          >
            <Box pos="relative" w="fill" aspectRatio={480 / 252}>
              <Image
                src={item.cover}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Flex direction="column" gap={{ base: 3, lg: 4 }} p={6}>
              {/* <Box fontSize={{ base: 24, lg: 40 }}>{iconsDict[item.title]}</Box> */}
              <Flex justify="space-between" align="center">
                <Box
                  as={m.div}
                  fontSize={{ base: 'xl', lg: '3xl' }}
                  fontWeight={{ base: 'medium' }}
                >
                  {t(item.title)}
                </Box>
                <Button
                  colorScheme="brand"
                  color="brand.blue"
                  padding={0}
                  size="xs"
                  w={{ base: '28px', lg: '40px' }}
                  h={{ base: '28px', lg: '40px' }}
                  variant="outline"
                  borderWidth={2}
                  borderRadius={100}
                  onClick={() => {
                    setSelectedCard(item)
                    setIsModalOpen(true)
                  }}
                >
                  <MdExpandMore style={{ fontSize: 32 }} />
                </Button>
              </Flex>
              <Box>
                <Text fontSize={{ base: 'sm', lg: 'md' }}>{t(item.desc)}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <MotionModal
        isOpen={isModalOpen}
        close={() => {
          setIsModalOpen(false)
          // setIsBugaModalOpen(false)
          // setSelectedBuga(null)
        }}
        data={selectedCard}
      />
    </Container>
  )
}

export default Notice
