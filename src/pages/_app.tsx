import { AppProps } from 'next/app'
//import '../style/style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
