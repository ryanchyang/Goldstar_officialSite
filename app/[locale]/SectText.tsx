'use client'

import { useTranslations } from 'next-intl'

import { Box, Flex, Heading, Text } from '@/theme/chakra'

type SectTextType = {
  item: { intro?: string; title: string; desc?: string; sectType?: string }
}

function SectText(props: SectTextType) {
  const { item } = props
  const t = useTranslations(item.sectType || 'Index')

  return (
    <Flex direction="column" fontFamily="heading" gap={[2, null, 4]}>
      <Box fontWeight="medium">
        {item.intro && (
          <Text fontSize={{ base: 'md', lg: 'xl' }} color="brand.red">
            {t(item.intro)}
          </Text>
        )}
        <Heading fontSize={{ base: '4xl', lg: '52px' }} color="brand.blue">
          {t(item.title)}
        </Heading>
      </Box>
      {item.desc && (
        <Box>
          <Text fontSize={{ base: 'sm', lg: 'md' }}>{t(item.desc)}</Text>
        </Box>
      )}
    </Flex>
  )
}

export default SectText
