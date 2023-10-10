'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'

import { useBreakpoint } from '@chakra-ui/react'
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
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import MotionModal from '@/components/MotionModal'
import { locationData } from '@/const/home'
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
  content: string
}

function LocationHorizontal() {
  const t = useTranslations('Index')
  const breakpoint = useBreakpoint({ ssr: false })
  console.log({ breakpoint })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedCard, setSelectedCard] = useState<CardDataType | null>(null)
  return (
    <Container
      px={0}
      pos="relative"
      //   p={4}
      pb={'150px'}
      maxW={'full'}
      overflow="hidden"
    >
      <Box textAlign="center" maxW={892} mx={'auto'} pb={{ base: 30, lg: 70 }}>
        <SectText item={locationData.text} />
      </Box>
      <Swiper
        slidesPerView="auto"
        spaceBetween={breakpoint === 'base' ? 16 : 32}
        freeMode
        pagination
        modules={[FreeMode]}
        style={{
          padding:
            breakpoint === 'base'
              ? '8px 16px 32px 16px'
              : '8px 16px 32px 100px',
          overflow: 'initial',
        }}
        className="nft__banner-card-area"
      >
        {locationData.list.map(item => (
          <SwiperSlide
            key={item.id}
            style={{
              maxWidth: breakpoint === 'base' ? 280 : 362,
              zIndex: selectedCard?.id === item.id ? 999 : 1,
            }}
          >
            <Box
              as={m.div}
              layoutId={item.id}
              key={item.id}
              borderRadius={20}
              boxShadow="md"
              border="1px solid #E3E2E6"
              bg="white"
              overflow="hidden"
              minHeight={348}
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
                  <Text fontSize={{ base: 'sm', lg: 'md' }}>
                    {t(item.desc)}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

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

export default LocationHorizontal
