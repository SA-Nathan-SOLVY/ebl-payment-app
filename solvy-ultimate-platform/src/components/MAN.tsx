import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Server } from 'lucide-react'

const MAN: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Shield className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">MAN Network</h1>
          <p className="text-lg text-gray-300">
            Monitoring, Audit, and Network security for the SOLVY ecosystem
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Security & Transparency</h2>
          <p className="text-gray-300">
            The MAN Network ensures transparency, security, and trust across all 
            SOLVY operations through comprehensive monitoring, auditing, and 
            network security protocols.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MAN

