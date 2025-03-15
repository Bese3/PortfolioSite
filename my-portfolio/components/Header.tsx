'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface HeaderProps {
  name: string
  title: string
  photoUrl: string
}

export default function Header({ name, title, photoUrl }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };

      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-around py-20 px-4 md:px-20"
    >
      <div className="text-center md:text-center" style={{marginLeft: isMobile? '22%': '0%', marginRight: '25%', marginBottom: '10%'}}>
        <h1 className="text-5xl font-bold mb-4">{name}</h1>
        <h2 className="text-3xl text-gray-300">{title}</h2>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <Image
          src={photoUrl}
          width={400}
          height={400}
          style={{borderRadius: '50%'}}
          className="rounded-full border-4 border-blue-500 shadow-lg transition-all duration-300 hover:border-blue-300"
          alt={''}
        />
      </motion.div>
    </motion.header>
  )
}

