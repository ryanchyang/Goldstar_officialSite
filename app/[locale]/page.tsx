import { Box, Button } from '@/theme/chakra'

import Contact from './Contact'
import Cost from './Cost'
import Developer from './Developer'
import Gallery from './Gallery'
// import Image from 'next/image'
// import styles from './page.module.css'
import Hero from './Hero'
import Location from './Location'
import LocationHorizontal from './LocationHorizontal'
import Notice from './Notice'
// import PieChart from './PieChart'
import Projection from './Projection'
import Strength from './Strength'
export default function Home() {
  return (
    <>
      <Hero />
      <Strength />
      <Cost />
      {/* <Projection /> */}
      {/* <Location /> */}
      <LocationHorizontal />
      {/* <PieChart /> */}
      <Gallery />
      <Notice />
      <Developer />
      <Contact />
    </>
  )
}
