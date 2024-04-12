'use client'

// import Image from 'next/image'

import { useTranslations } from 'next-intl'
import { MdKeyboardArrowDown } from 'react-icons/md'

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@/theme/chakra'

import NavList from './NavList'
import Sidebar from './Sidebar'

function Header() {
  const t = useTranslations('Index')

  return (
    <>
      <Container
        pos="fixed"
        zIndex="sticky"
        top={4}
        left={4}
        right={4}
        width={'calc(100% - 32px)'}
        maxW={1200}
        bg="white"
        color="black"
        borderRadius="xl"
        px={{ base: 6, md: 8 }}
        py={{ base: 3, md: 5 }}
        boxShadow={`0px 5px 12px 4px rgba(0, 0, 0, 0.09), 0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px -2px rgba(0, 0, 0, 0.16);`}
      >
        <Flex justify="space-between" align="center">
          <HStack spacing="3">
            <Link href={'/'}>
              <Text
                fontSize={{ base: 'md', lg: 'xl' }}
                fontWeight="bold"
                color="brand.blue"
              >
                MP Global Consulting LLC
              </Text>
              {/* <Link href={'/'}>
                <Image src={'/images/common/logo_full.png'} alt="logo" />
              </Link> */}
            </Link>
            {/* <Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="medium">
              Gold Star
            </Text> */}
          </HStack>
          <Spacer />
          <Box hideBelow="md">
            <NavList />
          </Box>
          <Spacer />
          <Sidebar />
          <Flex hideBelow="md" gap={2} align="center">
            {/* <Menu>
              <MenuButton
                variant="ghost"
                as={Button}
                rightIcon={<MdKeyboardArrowDown />}
              >
                English
              </MenuButton>
              <MenuList>
                <MenuItem>English</MenuItem>
                <MenuItem>繁體中文</MenuItem>
              </MenuList>
            </Menu> */}
            <Button
              colorScheme="brand"
              size={{ base: 'md', lg: 'lg' }}
              variant="outline"
              borderRadius={50}
              fontFamily="heading"
              fontWeight={500}
              fontSize="xl"
            >
              <Link href="/#contact">{t('contact_us')}</Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Header
