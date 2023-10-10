'use client'
// export { Link } from '@chakra-ui/next-js'
export {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  OrderedList,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useBreakpoint,
  useSteps,
  VStack,
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
