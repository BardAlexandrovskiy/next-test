import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600'],
  preload: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className} app`}>
      <Component {...pageProps} />
    </div>
  )
}
