'use client'

import { motion } from 'framer-motion'

interface HeaderProps {
  name: string
  title: string
}

export default function Header({ name, title }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20"
    >
      <h1 className="text-5xl font-bold mb-4">{name}</h1>
      <h2 className="text-3xl text-gray-300">{title}</h2>
    </motion.header>
  )
}

