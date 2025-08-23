'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface CollapsibleSectionProps {
  title: React.ReactNode
  children: React.ReactNode
  initiallyOpen?: boolean
  customClasses?: string
  titleColor?: string
}

export default function CollapsibleSection({ 
  title, 
  children, 
  initiallyOpen = false, 
  customClasses = '', 
  titleColor = 'text-gray-900'
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)

  const toggleOpen = () => setIsOpen(!isOpen)

  const baseClasses = "rounded-2xl p-6 shadow-lg border border-medical-red/10"
  const combinedClasses = twMerge(baseClasses, customClasses)

  return (
    <div className={combinedClasses}>
      <button
        onClick={toggleOpen}
        className={twMerge("w-full flex justify-between items-center text-left text-xl font-bold", titleColor)}
      >
        <span className="flex items-center gap-3">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-medical-red" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '24px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px' }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
