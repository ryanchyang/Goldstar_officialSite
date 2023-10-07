'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { strengthBlockList } from '@/const/home'
import { strengthSectList } from '@/const/home'
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@/theme/chakra'

import PieChart from './PieChart'
function Strength() {
  const t = useTranslations('Index')

  return (
    <Container
      pos="relative"
      p={4}
      pt={{ base: '250px', md: '150px' }}
      pb={'150px'}
      maxW={1200}
    >
      {/* block */}
      <Stack
        pos="absolute"
        zIndex={3}
        top={{ base: '-25px', lg: 0 }}
        left={'50%'}
        width={{ base: 'calc(100% - 32px)', xl: 'full' }}
        transform={{ base: 'translate(-50%,0)', lg: 'translate(-50%,-50%)' }}
        maxW={{ base: '375px', md: '100%' }}
        direction={{ base: 'column', md: 'row' }}
        divider={
          <StackDivider borderColor="gray.200" opacity={{ base: 0, md: 1 }} />
        }
        spacing={{ base: 2, md: 4 }}
        justify="space-evenly"
        px={{ base: 5, md: 6 }}
        py={{ base: 3, md: 5 }}
        borderRadius={20}
        boxShadow="md"
        bg="white"
      >
        {strengthBlockList.map(item => (
          <HStack
            key={item.id}
            justify={{ base: 'flex-start', lg: 'center' }}
            spacing={4}
            fontFamily="heading"
          >
            <Box>
              <Box
                pos="relative"
                w={{ base: 8, lg: 12 }}
                h={{ base: 8, lg: 12 }}
              >
                <Image src={item.icon} alt="" fill />
                {/* {item.stat} */}
              </Box>
            </Box>
            <Box maxW="160px">
              <Text color="brand.darkGray" fontSize={{ base: 'sm', lg: 'md' }}>
                {t(item.desc)}
              </Text>
            </Box>
          </HStack>
        ))}
      </Stack>
      {/* sect */}
      <Flex gap={{ base: 115, lg: 150 }} direction="column">
        {strengthSectList.map((item, i) => (
          <Flex
            key={item.id}
            direction={{ base: 'column', md: i % 2 ? 'row-reverse' : 'row' }}
            gap={{ base: 10, lg: 100 }}
            w="full"
          >
            <Flex
              direction="column"
              fontFamily="heading"
              gap={[2, null, 8]}
              maxWidth={600}
            >
              <Box fontWeight="medium">
                <Text
                  fontSize={{ base: 'xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="brand.red"
                >
                  {String(i + 1).padStart(2, '0')}
                </Text>
                <Heading
                  wordBreak={i === 4 ? 'keep-all' : 'initial'}
                  fontSize={{ base: '3xl', lg: '40px' }}
                  color="brand.blue"
                >
                  {t(item.title)}
                </Heading>
              </Box>
              {item.hasChart && (
                <Box>
                  <Text fontSize={{ base: 'sm', lg: 'lg' }}>
                    {t(item.desc)}
                  </Text>
                </Box>
              )}
            </Flex>
            {item.hasChart ? (
              <AspectRatio
                w={{ base: '100%', lg: '50%' }}
                m={'0 auto'}
                minW={100}
                pt={{ base: 0, lg: '72px' }}
                ratio={{ base: 1 / 1 }}
              >
                <PieChart data={item.chartData} />
              </AspectRatio>
            ) : (
              <Box
                w={'full'}
                minW={100}
                pt={{ base: 0, lg: '72px' }}
                // ratio={{ base: 343 / 320, lg: 520 / 320 }}
              >
                <Box>
                  <Text fontSize={{ base: 'sm', lg: 'lg' }}>
                    {t(item.desc)}
                  </Text>
                </Box>
              </Box>
            )}
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}

export default Strength
