import { Metadata } from 'next'
import Portfolio from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'Besufikad Yilma - Full Stack Developer',
  description: 'Portfolio of Besufikad, a Full Stack Developer specializing in React, Node.js, and more.',
}

export default function Home() {
  return (
    <main>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-16T7FXJK82"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-16T7FXJK82');
      </script>
      <Portfolio />
    </main>
  )
}

