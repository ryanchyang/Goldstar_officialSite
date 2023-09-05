import { Box, Button } from '@/theme/chakra'
// import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Box _before={{ content: '"🙂"', display: 'inline-block', mr: '5px' }}>
        A pseudo element
      </Box>
    </>
  )
}
