'use Client'

import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import {
  Box,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Tag,
  Text,
} from '@/theme/chakra'

type IStepperProp = { list: { desc?: string; tag?: string }[] }

function FlowStepper(props: IStepperProp) {
  const { list } = props
  const t = useTranslations('Eb3')

  return (
    <Stepper index={-1} orientation="vertical" gap="3">
      {list.map((step, index) => (
        <Fragment key={index}>
          {step.desc && (
            <Step>
              <StepIndicator>
                {/* <Text color="brand.blue">{index}</Text> */}
                <StepStatus
                  incomplete={
                    <Text
                      color="brand.blue"
                      fontWeight="bold"
                      fontFamily="heading"
                    >
                      {index + 1}
                    </Text>
                  }
                />
              </StepIndicator>
              <Box
                flexShrink="0"
                maxW={'90%'}
                pb={5}
                pl={1}
                minH={'80px'}
                color="brand.blue"
                fontFamily="heading"
              >
                <StepTitle>
                  {t.rich(step.desc, {
                    p: chunks => <p>{chunks}</p>,
                  })}
                </StepTitle>
                {/* <StepDescription>{step.description}</StepDescription> */}
              </Box>
              <StepSeparator />
            </Step>
          )}
          {step.tag && (
            <Tag
              size={'md'}
              colorScheme="brand"
              variant="outline"
              color="brand.red"
              border="1px solid"
              borderColor="brand.red"
              borderRadius="lg"
              fontFamily="heading"
            >
              {t(step.tag)}
            </Tag>
          )}
        </Fragment>
      ))}
    </Stepper>
  )
}

export default FlowStepper
