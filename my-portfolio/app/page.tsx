import { Metadata } from 'next'
import Portfolio from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer Portfolio',
  description: 'Portfolio of John Doe, a Full Stack Developer specializing in React, Node.js, and more.',
}

export default function Home() {
  return (
    <main>
      <Portfolio />
    </main>
  )
}

