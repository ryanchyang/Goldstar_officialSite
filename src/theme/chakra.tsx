'use client'
// export { Link } from '@chakra-ui/next-js'
export {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react'

import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Link = (props: LinkProps) => {
  const { children, ...linkProps } = props

  return (
    <ChakraLink
      as={NextLink}
      target={linkProps.isExternal ? '_blank' : '_self'}
      _hover={{ textDecoration: 'none' }}
      {...linkProps}
    >
      {children}
    </ChakraLink>
  )
}
