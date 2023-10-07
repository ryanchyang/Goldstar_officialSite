'use client'
import { useTranslations } from 'next-intl'

import { projectionData } from '@/const/home'
import {
  Container,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@/theme/chakra'

import SectText from './SectText'
function Projection() {
  const t = useTranslations('Index')

  return (
    <Container
      pos="relative"
      //   p={4}
      pb={'150px'}
      maxW={1200}
    >
      <Flex direction="column" gap={10}>
        <SectText item={projectionData.text} />
        <TableContainer borderRadius={20} boxShadow="md">
          <Table variant="simple">
            {/* <TableCaption>
              DISCLAIMER – THE INFORMATION CONTAINED HEREIN HAS BEEN COMPILED
              FROM A VARIETY OF SOURCES BELIEVED TO BE RELIABLE, HOWEVER, WE DO
              NOT GUARANTEE ITS ACCURACY. ALL ASPECTS OF THE PROPERTY SHOULD BE
              INDEPENDENTLY VERIFIED BY THE INVESTOR AND/OR THEIR CONSULTANTS.
            </TableCaption> */}
            <Thead bg="brand.blue">
              <Tr>
                <Th color="white"></Th>
                <Th color="white" isNumeric>
                  {t('first_year')}
                </Th>
                <Th color="white" isNumeric>
                  {t('second_year')}
                </Th>
                <Th color="white" isNumeric>
                  {t('third_year')}
                </Th>
                <Th color="white" isNumeric>
                  {t('forth_year')}
                </Th>
                <Th color="white" isNumeric>
                  {t('fifth_year')}
                </Th>
                <Th color="white" isNumeric>
                  {t('total')}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{t('revenue')}</Td>
                <Td isNumeric>$19,603,676</Td>
                <Td isNumeric>$21,972,843</Td>
                <Td isNumeric>$25,039,539</Td>
                <Td isNumeric>$26,121,178</Td>
                <Td isNumeric>$27,275,738</Td>
                <Td isNumeric>$120,012,974</Td>
              </Tr>
              <Tr>
                <Td>{t('departmental_expenses')}</Td>
                <Td isNumeric>$7,601,262</Td>
                <Td isNumeric>$7,026,950</Td>
                <Td isNumeric>$7,427,863</Td>
                <Td isNumeric>$7,651,960</Td>
                <Td isNumeric>$7,910,924</Td>
                <Td isNumeric>$37,618,959</Td>
              </Tr>
              <Tr>
                <Td>{t('undistributed_expenses')}</Td>
                <Td isNumeric>$3,600,124</Td>
                <Td isNumeric>$3,904,972</Td>
                <Td isNumeric>$4,287,921</Td>
                <Td isNumeric>$4,444,779</Td>
                <Td isNumeric>$4,616,956</Td>
                <Td isNumeric>$20,854,752</Td>
              </Tr>
              <Tr>
                <Td>{t('fixed_expenses')}</Td>
                <Td isNumeric>$406,002</Td>
                <Td isNumeric>$407,000</Td>
                <Td isNumeric>$407,999</Td>
                <Td isNumeric>$409,863</Td>
                <Td isNumeric>$411,000</Td>
                <Td isNumeric>$2,041,863</Td>
              </Tr>
              <Tr>
                <Td>{t('net_operating_income')}</Td>
                <Td isNumeric>$7,996,288</Td>
                <Td isNumeric>$10,633,921</Td>
                <Td isNumeric>$12,915,756</Td>
                <Td isNumeric>$13,615,573</Td>
                <Td isNumeric>$14,336,859</Td>
                <Td isNumeric>$59,498,397</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>{t('cap_rate')}</Td>
                <Td isNumeric>5.5%</Td>
                <Td isNumeric>5.5%</Td>
                <Td isNumeric>5.5%</Td>
                <Td isNumeric>5.5%</Td>
                <Td isNumeric>5.5%</Td>
                <Td isNumeric></Td>
              </Tr>
              <Tr>
                <Td>{t('valuation')}</Td>
                <Td isNumeric>$145,387,054</Td>
                <Td isNumeric>$193,344,018</Td>
                <Td isNumeric>$234,831,927</Td>
                <Td isNumeric>$247,555,872</Td>
                <Td isNumeric>$260,670,163</Td>
                <Td isNumeric></Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </Container>
  )
}

export default Projection
