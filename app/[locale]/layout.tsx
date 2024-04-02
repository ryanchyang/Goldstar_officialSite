import '../globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box } from '@/theme/chakra'

import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goldstar',
  description:
    'Hilton Arcadia -- The best real estate and EB-5 projects in Southern California',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tw' }]
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../src/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale}>
      {/* <Head>
        <Script></Script>
      </Head> */}
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Box minW={300}>
              <Header />
              {children}
              <Footer />
            </Box>
          </Providers>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-96WKN0HJTL" />
    </html>
  )
}
