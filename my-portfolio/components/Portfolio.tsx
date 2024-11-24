'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Background from './Background'

export interface PortfolioData {
  name: string
  title: string
  about: string
  skills: Array<string>
  experience: {
    company: string
    position: string
    duration: string
    description: string
  }[]
  projects: {
    title: string
    description: string
    image: string
    link: string
  }[]
  contact: {
    email: string
    linkedin: string
    github: string
  }
}

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData | null>(null)

  useEffect(() => {
    fetch('/data/portfolio-data.json')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  if (!data) return <div>Loading...</div>

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <Background />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header name={data.name} title={data.title} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact contact={data.contact} />
      </motion.div>
    </div>
  )
}

