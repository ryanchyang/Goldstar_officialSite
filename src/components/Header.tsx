// import Image from 'next/image'

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from '@/theme/chakra'

import NavList from './NavList'

function Header() {
  return (
    <>
      <Container
        pos="fixed"
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
        <Flex justify="space-between">
          <HStack spacing="3">
            <Box w={{ base: '6', md: '10' }}>
              <Image src={'/images/common/logo.png'} alt="logo" />
            </Box>
            <Text fontSize={{ base: 'md', md: '2xl' }} fontWeight="medium">
              Gold Star
            </Text>
          </HStack>
          <Spacer />
          <Box hideBelow="md">
            <NavList />
          </Box>
          <Spacer />
          <Box hideFrom="md" as="button" w={{ base: '6', md: '10' }}>
            <Image src={'/images/common/menu.png'} alt="menu" />
          </Box>
          <Box hideBelow="md">
            <Button
              colorScheme="brand"
              size={{ base: 'md', lg: 'lg' }}
              variant="outline"
              borderRadius={50}
              fontFamily="heading"
              fontWeight={500}
              fontSize="xl"
            >
              Contact us
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Header
