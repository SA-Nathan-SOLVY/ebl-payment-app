import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Shield, Building, Briefcase, Palette, UserCheck } from 'lucide-react'

const Communities: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Users className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Communities We Serve</h1>
          <p className="text-lg text-gray-300">
            Empowering diverse communities with tailored financial solutions for true economic sovereignty.
          </p>
        </motion.div>

        {/* Communities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Military Veterans */}
            <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-6 hover:bg-blue-600/30 transition-all duration-300">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Military Veterans</h3>
              <p className="text-gray-300 text-sm">
                Specialized financial solutions honoring those who served, with dedicated support for military benefits and transitions.
              </p>
            </div>

            {/* Self-Employed & Small Businesses */}
            <div className="bg-purple-600/20 border border-purple-600/30 rounded-lg p-6 hover:bg-purple-600/30 transition-all duration-300">
              <Briefcase className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Self-Employed & Small Businesses</h3>
              <p className="text-gray-300 text-sm">
                Tailored services for entrepreneurs and small business owners, supporting sustainable growth and financial independence.
              </p>
            </div>

            {/* Employee-Owned Companies */}
            <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-6 hover:bg-green-600/30 transition-all duration-300">
              <Building className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Employee-Owned Companies</h3>
              <p className="text-gray-300 text-sm">
                Supporting shared ownership models with collaborative financial tools and cooperative banking solutions.
              </p>
            </div>

            {/* IBC/BYOB Entrepreneurs */}
            <div className="bg-orange-600/20 border border-orange-600/30 rounded-lg p-6 hover:bg-orange-600/30 transition-all duration-300">
              <UserCheck className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">IBC/BYOB Entrepreneurs</h3>
              <p className="text-gray-300 text-sm">
                Specialized support for Infinite Banking Concept practitioners and Be Your Own Banker strategies.
              </p>
            </div>

            {/* NFT Enthusiasts & Creators */}
            <div className="bg-pink-600/20 border border-pink-600/30 rounded-lg p-6 hover:bg-pink-600/30 transition-all duration-300">
              <Palette className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">NFT Enthusiasts & Creators</h3>
              <p className="text-gray-300 text-sm">
                Integrated solutions for NFT trading, creation, and monetization with seamless fiat-to-crypto conversion.
              </p>
            </div>

            {/* Un/Underbanked Individuals */}
            <div className="bg-cyan-600/20 border border-cyan-600/30 rounded-lg p-6 hover:bg-cyan-600/30 transition-all duration-300">
              <Users className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Un/Underbanked Individuals</h3>
              <p className="text-gray-300 text-sm">
                Inclusive financial services breaking down traditional banking barriers, ensuring access for all and get rid of poverty to make our economy stronger.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Join the Path to Sovereignty */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Path to Sovereignty</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Break free from traditional financial chains. Subscribe to receive updates about our mission to empower individuals through decentralized financial sovereignty.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Member Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NFT Avatar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tech Companies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Explorer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Why SOLVY</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education Hub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NGO Transparency</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              Breaking chains, building futures. Empowering individuals through decentralized financial sovereignty.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Communities

