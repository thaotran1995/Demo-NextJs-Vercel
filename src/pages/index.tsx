import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1><b>Hello World!</b></h1>
      <h1> I'm Sia Alita</h1>
    </main>
  )
}
