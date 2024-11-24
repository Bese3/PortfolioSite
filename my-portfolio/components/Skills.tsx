'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PortfolioData } from './Portfolio'


interface SkillsProps {
  skills: PortfolioData['skills']
}

export default function Skills({ skills }: SkillsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.10,
              transition: { duration: 0.2 },
            }}
            className="bg-gray-700 rounded-full px-4 py-2"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

