import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: 500,
    borderRadius: 100, // <-- border radius is same for all variants and sizes
  },
  // Styles for the size variations
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  // Styles for the visual style variations
  variants: {
    solid: {},
    outline: {
      _hover: {
        background: 'rgba(0,0,0,0.08)',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: { size: 'md', variant: 'solid' },
})

export default Button
