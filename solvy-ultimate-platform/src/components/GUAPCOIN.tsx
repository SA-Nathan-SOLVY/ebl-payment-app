import React from 'react'
import { motion } from 'framer-motion'
import { Coins, TrendingUp, Globe, Users } from 'lucide-react'

interface GUAPCOINProps {
  currentUser: any
}

const GUAPCOIN: React.FC<GUAPCOINProps> = ({ currentUser }) => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Coins className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">GUAPCOIN Network</h1>
          <p className="text-lg text-gray-300">
            Blockchain bridge connecting diaspora wealth to African development
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
          <p className="text-gray-300">
            The GUAPCOIN network is being developed to create a transparent, 
            trackable bridge between African diaspora financial power and 
            continental development projects through the AES Investment Bank.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GUAPCOIN

