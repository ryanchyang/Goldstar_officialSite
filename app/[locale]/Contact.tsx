'use client'

import Image from 'next/image'
import line from 'public/images/common/LINE_logo.png'
import {
  GoogleFormProvider,
  useGoogleForm,
  useLongAnswerInput,
  useShortAnswerInput,
} from 'react-google-forms-hooks'
import { GoogleForm } from 'react-google-forms-hooks'
import { useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'

import formJson from '@/data/GoogleForm.json'
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Link,
  Textarea,
} from '@/theme/chakra'

type IFormInputs = {
  id: string
  type: 'text' | 'email' | 'tel' | undefined
  fieldName: string
  hookRegister?: any
}

const inputNameById = {
  fullName: '218046897',
  tel: '1632554903',
  email: '1266362013',
  message: '1055067388',
}

const ShortAnswerInput = ({
  id,
  type,
  fieldName,
  hookRegister,
}: IFormInputs): JSX.Element => {
  const { register } = useShortAnswerInput(id)

  return (
    <Input
      type={type}
      placeholder={fieldName}
      {...hookRegister()}
      // {...register()}
    />
  )
}

const LongAnswerInput = ({
  id,
  type,
  fieldName,
  hookRegister,
}: IFormInputs): JSX.Element => {
  const { register } = useLongAnswerInput(id)
  return (
    <Textarea
      // type={type}
      placeholder={fieldName}
      {...hookRegister()}
      // {...register()}
    />
  )
  // return <TextAreaInput type={type} label={label} {...register()} />
}

function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      tel: '',
      email: '',
      message: '',
    },
    mode: 'onChange',
  })

  const methods = useGoogleForm({ form: formJson as GoogleForm })

  // const onSubmit = async data => {
  //   console.log({ data })
  //   await methods.handleSubmit(
  //     async data => await methods.submitToGoogleForms(data)
  //   )
  // }

  const onSubmit = async (data: any) => {
    console.log({ data })
    const formData = {
      [inputNameById['fullName']]: data.fullName,
      [inputNameById['tel']]: data.tel,
      [inputNameById['email']]: data.email,
      [inputNameById['message']]: data.message,
    }
    // const submitData = new FormData()
    // submitData.append('123', 321)
    // Object.keys(data).map((item: string) =>
    //   submitData.append(inputNameById[item], data[item])
    // )
    // for (const value of submitData.values()) {
    //   console.log(value)
    // }
    // submitData.append([inputNameById['fullName']], data.fullName)
    await methods.submitToGoogleForms(formData)
  }
  // method
  // methods.submitToGoogleForms(data)

  return (
    <Container maxW={1200} pb={'150px'}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 4, lg: 100 }}
        maxW={1145}
      >
        <Box w={'fit-content'}>
          <Flex direction="column" gap={4}>
            <Heading fontSize={{ base: '4xl', lg: '52px' }} whiteSpace="nowrap">
              Contact us
            </Heading>
            <HStack spacing={{ base: 4 }}>
              <Link isExternal href="https://line.me/en/">
                <Box
                  pos="relative"
                  w={{ base: 6, lg: 8 }}
                  h={{ base: 6, lg: 8 }}
                >
                  <Image src={line} alt="" fill />
                </Box>
              </Link>
              <Box color="brand.blue" fontSize={{ base: 32, lg: 40 }}>
                <MdEmail />
              </Box>
            </HStack>
          </Flex>
        </Box>
        <Box w={'full'}>
          <GoogleFormProvider {...methods}>
            <form id="contactUs" onSubmit={handleSubmit(onSubmit)}>
              <Grid
                // h="200px"
                // templateRows="repeat(, 1fr)"
                templateColumns={'repeat(2, 1fr)'}
                columnGap={[0, 4]}
                rowGap={0}
              >
                {/* <GridItem rowSpan={2} colSpan={1} bg="tomato" /> */}
                <GridItem colSpan={{ base: 2, sm: 1 }} h={'89px'}>
                  <FormControl isInvalid={Boolean(errors.fullName)}>
                    <FormLabel htmlFor="fullName" mb={1}>
                      fullName
                    </FormLabel>
                    {/* <ShortAnswerInput
                      id="218046897"
                      type="text"
                      fieldName="fullName"
                      hookRegister={() =>
                        register('fullName', {
                          required: 'This is required',
                          minLength: {
                            value: 4,
                            message: 'Minimum length should be 4',
                          },
                        })
                      }
                    /> */}
                    <Input
                      // id="218046897"
                      placeholder="fullName"
                      {...register('fullName', {
                        required: 'This is required',
                        minLength: {
                          value: 4,
                          message: 'Minimum length should be 4',
                        },
                      })}
                    />
                    <FormErrorMessage mt={1}>
                      {errors.fullName && errors.fullName.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem hideBelow={'sm'} colSpan={1} />
                <GridItem colSpan={{ base: 2, sm: 1 }} h={'89px'}>
                  <FormControl isInvalid={Boolean(errors.tel)}>
                    <FormLabel htmlFor="tel" mb={1}>
                      phone
                    </FormLabel>
                    {/* <ShortAnswerInput
                      id="1632554903"
                      type="tel"
                      fieldName="tel"
                      hookRegister={() =>
                        register(inputNameById.tel, {
                          required: 'This is required',
                        })
                      }
                    /> */}
                    <Input
                      type="tel"
                      // id="1632554903"
                      placeholder="tel"
                      {...register('tel', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage mt={1}>
                      {errors.tel && errors.tel.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, sm: 1 }} h={'89px'}>
                  <FormControl isInvalid={Boolean(errors.email)}>
                    <FormLabel htmlFor="email" mb={1}>
                      email
                    </FormLabel>
                    {/* <ShortAnswerInput
                      id="1266362013"
                      type="email"
                      fieldName="email"
                      hookRegister={() =>
                        register(inputNameById.email, {
                          required: 'This is required',
                        })
                      }
                    /> */}
                    <Input
                      // id="1266362013"
                      type="email"
                      placeholder="email"
                      {...register('email', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage mt={1}>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isInvalid={Boolean(errors.message)}>
                    <FormLabel htmlFor="message" mb={1}>
                      message
                    </FormLabel>
                    {/* <LongAnswerInput
                      id="1055067388"
                      type="text"
                      fieldName="message"
                      hookRegister={() =>
                        register(inputNameById.message, {
                          required: 'This is required',
                          maxLength: {
                            value: 500,
                            message: 'Maximun length should be 500',
                          },
                        })
                      }
                    /> */}
                    <Textarea
                      // id="1055067388"
                      placeholder="Here is a sample placeholder"
                      {...register('message', {
                        required: 'This is required',
                        maxLength: {
                          value: 500,
                          message: 'Maximun length should be 500',
                        },
                      })}
                    />
                    <FormErrorMessage mt={1}>
                      {errors.message && errors.message.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
              <Button
                variant="solid"
                mt={4}
                colorScheme="brand"
                size={{ base: 'md', lg: 'lg' }}
                fontFamily="heading"
                fontWeight={500}
                fontSize="xl"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </GoogleFormProvider>
        </Box>
      </Flex>
    </Container>
  )
}

export default Contact
