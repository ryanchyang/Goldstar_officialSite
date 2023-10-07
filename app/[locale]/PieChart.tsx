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
import { useTranslations } from 'next-intl'
import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'

import { Box, Button } from '@/theme/chakra'

ChartJS.register(ArcElement, Tooltip, Legend, ...registerables)

function PieChart({ data }) {
  const t = useTranslations('Index')

  return (
    <Box>
      <Box w={'100%'} maxWidth={500} m={'0 auto'}>
        <Pie data={{ ...data, labels: data.labels.map(v => t(v)) }} />
      </Box>
      {/* <Box w={'100%'} maxWidth={1200} m={'0 auto'}>
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
      </Box> */}
    </Box>
  )
}

export default PieChart
