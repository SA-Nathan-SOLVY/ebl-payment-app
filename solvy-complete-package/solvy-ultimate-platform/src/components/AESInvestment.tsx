import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Globe, Users, Shield } from 'lucide-react'

interface AESInvestmentProps {
  currentUser: any
}

const AESInvestment: React.FC<AESInvestmentProps> = ({ currentUser }) => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <TrendingUp className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">AES Investment Bank</h1>
          <p className="text-lg text-gray-300">
            Direct connection to Mali, Niger, and Burkina Faso's revolutionary investment bank
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Partnership Development</h2>
          <p className="text-gray-300">
            We are developing partnerships with the AES Investment Bank to enable 
            direct diaspora investment in African continental development projects. 
            This will create a transparent pathway for SOLVY users to contribute 
            to African economic sovereignty.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AESInvestment

