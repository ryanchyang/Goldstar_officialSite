import { extendTheme } from '@chakra-ui/react'

import Button from './components/button'
import colors from './foundations/colors'
import fonts from './foundations/fonts'
const theme = extendTheme({
  components: { Button },
  fonts,
  colors,
})

export default theme
