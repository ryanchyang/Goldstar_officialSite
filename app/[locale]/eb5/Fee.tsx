'use client'

import { useTranslations } from 'next-intl'

import {
  Box,
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

import SectText from '../SectText'

function Fee() {
  const t = useTranslations('Eb5')

  return (
    <Container
      pos="relative"
      p={4}
      // pt={{ base: '100px', md: '127px' }}
      pb={'150px'}
      maxW={1200}
    >
      <Box mb={10}>
        <SectText
          item={{
            intro: 'flow_intro',
            title: 'fee_title',
            sectType: 'Eb5',
          }}
        />
      </Box>
      <TableContainer borderRadius={20} boxShadow="md">
        <Table variant="simple" size={{ base: 'md', lg: 'lg' }}>
          <TableCaption>
            上述費用僅供參考。實際申請費用講將以遞交申請時，移民局/國家簽證中心網站上發表的申請費用為準。
          </TableCaption>
          <Thead bg="brand.blue">
            <Tr>
              <Th color="white">{t('fee_type')}</Th>
              <Th color="white">{t('fee_payable')}</Th>
              <Th color="white">{t('amount')}</Th>
              <Th color="white">{t('due')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{t('ImmigrationAttorneyRetainer')}</Td>
              <Td>{t('ImmigrationLawFirm')}</Td>
              <Td>{t('ImmigrationAttorneyRetainerAmount')}</Td>
              <Td>{t('UponRetainingAttorney')}</Td>
            </Tr>
            <Tr>
              <Td>{t('documentFee')}</Td>
              <Td>{t('thirdParty')}</Td>
              <Td>{t('varies')}</Td>
              <Td>{t('documentFeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('investmentCapital')}</Td>
              <Td>{t('EB5Project')}</Td>
              <Td>{t('investmentCapitalAmount')}</Td>
              <Td>{t('investmentCapitalDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('adminFee')}</Td>
              <Td>{t('EB5Project')}</Td>
              <Td>{t('adminFeeAmount')}</Td>
              <Td>{t('adminFeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('I526Fee')}</Td>
              <Td>{t('USCIS')}</Td>
              <Td>{t('I526FeeAmount')}</Td>
              <Td>{t('I526FeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('IntegrityFundFee')}</Td>
              <Td>{t('USCIS')}</Td>
              <Td>{t('IntegrityFundFeeAmount')}</Td>
              <Td>{t('IntegrityFundFeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('I485Fee')}</Td>
              <Td>{t('USCIS')}</Td>
              <Td>{t('I485FeeAmount')}</Td>
              <Td>{t('I485FeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('DS260Fee')}</Td>
              <Td>{t('NVC')}</Td>
              <Td>{t('DS260FeeAmount')}</Td>
              <Td>{t('DS260FeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('MedicalExamFee')}</Td>
              <Td>{t('USCISHospital')}</Td>
              <Td>{t('varies')}</Td>
              <Td>{t('MedicalExamFeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('immiFee')}</Td>
              <Td>{t('USCIS')}</Td>
              <Td>{t('immiFeeAmount')}</Td>
              <Td>{t('immiFeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('I829Fee')}</Td>
              <Td>{t('USCIS')}</Td>
              <Td>{t('I829FeeAmount')}</Td>
              <Td>{t('I829FeeDue')}</Td>
            </Tr>
            <Tr>
              <Td>{t('biometricFee')}</Td>
              <Td>{t('USCIS')}</Td>
              <Td>{t('biometricFeeAmount')}</Td>
              <Td>{t('biometricFeeDue')}</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Fee
