'use client'

import { HStack } from '@chakra-ui/react'
import { useParams, usePathname } from 'next/navigation'

import { navlist } from '@/const/header'
import { Link } from '@/theme/chakra'

function NavList() {
  const currentRoute = usePathname()
  const params = useParams()
  console.log({ currentRoute, params })
  return (
    <>
      <HStack spacing="10">
        {navlist.map(item => (
          <Link
            key={item.id}
            href={item.href}
            px={3}
            py={'10px'}
            fontFamily="heading"
            fontWeight={500}
            color={currentRoute === item.href ? 'brand.blue' : 'black'}
          >
            {item.label}
          </Link>
        ))}
      </HStack>
    </>
  )
}

export default NavList
