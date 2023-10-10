'use client'

import { useTranslations } from 'next-intl'

import faqList from '@/const/faq'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from '@/theme/chakra'

import SectText from '../SectText'

function FAQ() {
  const t = useTranslations('Faq')

  return (
    <Container pos="relative" p={4} pt={'150px'} pb={'100px'} maxW={1200}>
      <Box maxW={910} mx={'auto'}>
        <Box mb={'53px'}>
          <SectText item={{ desc: 'faq_desc', title: 'faq' }} />
        </Box>
        <Accordion allowMultiple>
          {faqList.map(item => (
            <AccordionItem key={item.key}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" p={4}>
                    {t(item.title)}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {t.rich(item.key, {
                  p: chunks => <p>{chunks}</p>,
                  very: chunks => <i>{chunks}</i>,
                  ol: chunks => (
                    <ol style={{ paddingLeft: '22px' }}>{chunks}</ol>
                  ),
                  li: chunks => <li>{chunks}</li>,
                })}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  )
}

export default FAQ
