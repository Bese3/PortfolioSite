import { Metadata } from 'next'
import Portfolio from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'Besufikad Yilma - Full Stack Developer',
  description: 'Portfolio of Besufikad, a Full Stack Developer specializing in React, Node.js, and more.',
}

export default function Home() {
  return (
    <main>
      <Portfolio />
    </main>
  )
}

