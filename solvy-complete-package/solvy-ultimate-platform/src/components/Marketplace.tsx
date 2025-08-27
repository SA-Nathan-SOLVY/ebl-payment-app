import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Store, Users, Coins } from 'lucide-react'

interface MarketplaceProps {
  currentUser: any
}

const Marketplace: React.FC<MarketplaceProps> = ({ currentUser }) => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <ShoppingBag className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">SOLVY Marketplace</h1>
          <p className="text-lg text-gray-300">
            Services and goods from SOLVY network partners
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Partner Network</h2>
          <p className="text-gray-300">
            The SOLVY Marketplace will connect users to a network of partner 
            businesses where they can use their SOLVY cards and earn Cooperative Rewards 
            rewards while supporting the cooperative economy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Marketplace

