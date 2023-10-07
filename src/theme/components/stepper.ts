import { defineStyleConfig } from '@chakra-ui/react'

const Stepper = defineStyleConfig({
  baseStyle: {
    indicator: {
      // change the default border radius to 0
      border: '1px solid',
      borderColor: 'brand.red',
    },
    separator: { background: 'brand.red' },
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  defaultProps: { size: 'md' },
})

export default Stepper
