import { extendTheme } from '@chakra-ui/react'

import Button from './components/button'
import Stepper from './components/stepper'
import colors from './foundations/colors'
import fonts from './foundations/fonts'
const theme = extendTheme({
  components: { Button, Stepper },
  fonts,
  colors,
})

export default theme
