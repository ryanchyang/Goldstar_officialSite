'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import line from 'public/images/common/LINE_logo.png'
import { FaMobileAlt } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { HiOutlineMail } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@/theme/chakra'

function Footer() {
  const t = useTranslations('Index')

  return (
    <>
      <Container
        pos="relative"
        width={'100%'}
        maxW={'100%'}
        bg="brand.blue"
        color="white"
        px={{ base: 6, md: 10 }}
        py={{ base: 6, md: 8 }}
      >
        <Flex
          gap={{ base: 8, lg: 8 }}
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align="center"
        >
          <Flex
            align="center"
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 6, lg: 6 }}
          >
            <Flex gap={2} align="center">
              <Box
                pos="relative"
                w={{ base: '24px', md: '40px' }}
                height={{ base: '24px', md: '40px' }}
              >
                <Image src={'/images/common/logo.png'} alt="logo" fill />
              </Box>
              <VStack align="flex-start" gap={0}>
                <Box as="h4" fontSize={'16px'} fontFamily="heading">
                  MP Global Consulting LLC
                </Box>
              </VStack>
            </Flex>
            <SimpleGrid
              columns={[1, null, 2]}
              spacing={[4, 4, 4, 6]}
              //   gap={4}
            >
              <Flex align="center" gap={1}>
                <HiOutlineMail fontSize={'18px'} />
                <Box as="p" fontSize={{ base: '14px' }}>
                  carolhuang8@gmail.com
                </Box>
              </Flex>

              <Flex align="center" gap={1}>
                <FiPhone fontSize={'18px'} />
                <Box as="p" fontSize={{ base: '14px' }}>
                  626-445-8789
                </Box>
              </Flex>
              <Flex align="center" gap={1}>
                <FaMobileAlt fontSize={'18px'} />
                <Box as="p" fontSize={{ base: '14px' }}>
                  626-524-6537
                </Box>
              </Flex>
              <Flex align="start" gap={1}>
                <GoHome fontSize={'18px'} />
                <Box as="p" fontSize={{ base: '14px' }}>
                  25 E Huntington Dr.
                  <br />
                  Arcadia, CA 91107
                </Box>
              </Flex>
            </SimpleGrid>
          </Flex>
          <Flex
            align="start"
            w={'100%'}
            maxW={220}
            margin={{ base: '0 auto', xl: '0 0 0 auto' }}
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 6, lg: 6 }}
          >
            {/* <Box as="p" fontSize={{ base: '14px' }}>
              {t('certificate')}
            </Box> */}
            <HStack spacing={{ base: 4 }}>
              <Link isExternal href="https://line.me/en/">
                <Box
                  pos="relative"
                  w={{ base: 7, lg: 8 }}
                  h={{ base: 7, lg: 8 }}
                >
                  <Image src={line} alt="" fill />
                </Box>
              </Link>
              <Box color="white" fontSize={{ base: 24, lg: 32 }}>
                <MdEmail />
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Footer
