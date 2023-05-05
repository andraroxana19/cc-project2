import '@/styles/globals.css'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import "@/js/utils/navbar.css";
import MyImage from "@/public/pizza1.jpg";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
