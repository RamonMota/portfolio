import { motion } from 'framer-motion'
import React from 'react'

import './introdution.scss'

export const Introdution = () => {
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className='container-introdution'>
            <h2>Lorem ipsum dolor</h2>
            <h2>Praesent ultricies </h2>
        </div>
    </motion.div>
    
  )
}
