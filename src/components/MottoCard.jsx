import React from 'react'
import { motion } from 'framer-motion'

export default function MottoCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.4, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="card hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-center h-[124px] flex items-center justify-center"
    >
      <div className="relative">
        <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 animate-pulse">
          "Build. Break. Rebuild."
        </h3>
        <p className="text-xs text-gray-400 mt-1">Developer's Motto</p>
        
        {/* Декоративные элементы */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-500/30 rounded-full animate-ping" />
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-violet-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </motion.div>
  )
}
