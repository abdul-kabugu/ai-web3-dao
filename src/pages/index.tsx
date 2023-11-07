import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-[url("/img/stars.svg")] bg-black ${inter.className}`}
    >
      <Header  />
     <Hero  />
    </main>
  )
}
