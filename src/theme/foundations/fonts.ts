import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

const fonts = {
  heading: poppins.style.fontFamily,
  body: poppins.style.fontFamily,
}

export default fonts
