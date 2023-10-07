'use client'

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  registerables,
  Tooltip,
} from 'chart.js'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'

import { costData } from '@/const/home'
import { Box, Button, Container, Flex, SimpleGrid, Text } from '@/theme/chakra'

// const iconsDict: { [key: string]: JSX.Element } = {
//   great_location: <GoLocation />,
//   nice_school: <RiGraduationCapLine />,
//   housing: <BsHouseDoor />,
//   nature: <LuMountainSnow />,
//   attraction: <LuFerrisWheel />,
//   mall: <HiOutlineShoppingBag />,
// }
import SectText from './SectText'

ChartJS.register(ArcElement, Tooltip, Legend, ...registerables)

const barData = {
  labels: [''],

  datasets: [
    {
      axis: 'y',
      label: 'Land',
      data: [11000000],
      fill: false,
      backgroundColor: ['#B31942'],
      borderColor: ['#B31942'],
      borderWidth: 1,
      barThickness: 60,
    },
    {
      axis: 'y',
      label: 'Parking',
      data: [8000000],
      fill: false,
      backgroundColor: ['#CA5E7B'],
      borderColor: ['#CA5E7B'],
      borderWidth: 1,
      barThickness: 60,
    },
    {
      axis: 'y',
      label: 'Soft Cost Paid',
      data: [4360641],
      fill: false,
      backgroundColor: ['#D1758E'],
      borderColor: ['#D1758E'],
      borderWidth: 1,
      barThickness: 60,
    },
    {
      axis: 'y',
      label: 'Construction',
      data: [64832971],
      fill: false,
      backgroundColor: ['#D98CA0'],
      borderColor: ['#D98CA0'],
      borderWidth: 1,
      barThickness: 60,
    },
    {
      axis: 'y',
      label: 'Soft Cost Balance',
      data: [14204529],
      fill: false,
      backgroundColor: ['#E1A3B3'],
      borderColor: ['#E1A3B3'],
      borderWidth: 1,
      barThickness: 60,
    },
  ],
}

function Cost() {
  const t = useTranslations('Index')

  return (
    <Container
      pos="relative"
      //   p={4}
      pb={'150px'}
      maxW={1200}
    >
      <Box textAlign="center" maxW={892} mx={'auto'} pb={{ base: 30, lg: 70 }}>
        <SectText item={costData.text} />
      </Box>
      <Box w={'100%'} maxWidth={1200} m={'0 auto'}>
        <Bar
          options={{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 5 / 1,
            scales: {
              x: {
                max: 11000000 + 8000000 + 4360641 + 64832971 + 14204529,
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          }}
          data={barData}
          // {...props}
        />
      </Box>
    </Container>
  )
}

export default Cost
