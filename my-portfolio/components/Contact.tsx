'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ContactProps {
  contact: {
    email: string
    linkedin: string
    github: string
  }
}

export default function Contact({ contact }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-3xl mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="flex justify-center space-x-6">
        <motion.a
          href={`mailto:${contact.email}`}
          variants={itemVariants}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Email
        </motion.a>
        <motion.a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          LinkedIn
        </motion.a>
        <motion.a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          GitHub
        </motion.a>
      </div>
    </motion.section>
  )
}

