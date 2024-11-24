'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AboutProps {
  about: string
}

export default function About({ about }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-xl leading-relaxed">{about}</p>
    </motion.section>
  )
}

