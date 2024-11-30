'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ExperienceItem {
  company: string
  position: string
  duration: string
  description: string
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    },
  })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants(index)}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.position}</h3>
            <h4 className="text-lg text-gray-300 mb-2">{item.company}</h4>
            <p className="text-gray-400 mb-4">{item.duration}</p>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

