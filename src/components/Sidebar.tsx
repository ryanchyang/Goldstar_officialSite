'use client'

import { useDisclosure, VStack } from '@chakra-ui/react'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'

import { navlist } from '@/const/header'
import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
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
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const currentRoute = usePathname()
  return (
    <Box hideFrom="md">
      <Box
        display="flex"
        hideFrom="md"
        as="button"
        w={{ base: '6', md: '10' }}
        onClick={onOpen}
      >
        <Image src={'/images/common/menu.png'} alt="menu" />
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box w={{ base: '100px', md: '163px' }}>
              <Link href={'/'}>
                <Image src={'/images/common/logo_full.png'} alt="logo" />
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="5">
              {navlist.map(item => (
                <Link
                  key={item.id}
                  href={item.href}
                  px={3}
                  py={'10px'}
                  fontFamily="heading"
                  fontWeight={500}
                  color={currentRoute === item.href ? 'brand.blue' : 'black'}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
            <Center mt={6}>
              <Button
                colorScheme="brand"
                size={{ base: 'md', lg: 'lg' }}
                variant="solid"
                borderRadius={50}
                fontFamily="heading"
                fontWeight={500}
                fontSize="xl"
                onClick={onClose}
              >
                <Link href="/#contact">Contact us</Link>
              </Button>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Sidebar
