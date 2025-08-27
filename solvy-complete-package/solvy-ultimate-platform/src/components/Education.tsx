import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Shield, Globe } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <BookOpen className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Education Center</h1>
          <p className="text-lg text-gray-300">
            Learn about financial sovereignty, blockchain technology, and African diaspora empowerment
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Educational Resources</h2>
          <p className="text-gray-300">
            Comprehensive educational content about SOVEREIGNITITY™, Cooperative Rewards, 
            and the connection between African diaspora financial power and 
            continental development is being developed.
          </p>
        </div>

        {/* Understanding the Banking System Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding the Banking System</h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Ellen Brown's "Web of Debt" reveals how the private banking system has created a complex web of financial control, often misunderstood by the general public.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Revelations</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Money creation is controlled by private banks
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Federal Reserve serves private interests
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Public banking alternatives work
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Current system creates unnecessary debt
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">SOLVY's Alternative</h3>
                  <p className="text-gray-300 mb-4">
                    We're building a transparent, community-controlled financial ecosystem that returns power to the people.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300">
                      Become a Member
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SOLVY Ecosystem Overview */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">The SOLVY Ecosystem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* DECIDEY */}
                <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">DECIDEY (dee-see-day)</h4>
                  <p className="text-blue-300 text-sm mb-3">Decentralized Empowerment Control Identity Data Economy of Yours</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Control Your Identity, Data, and Economy. Our NGO Operations focus on tech company revenue tax reparation, transparent donation management, and community-focused initiatives.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">○</span>
                      Tax reparation monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">○</span>
                      DDJ privacy case tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">○</span>
                      Transparent donation management
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-2">○</span>
                      Community-focused initiatives
                    </li>
                  </ul>
                </div>

                {/* SOLVY */}
                <div className="bg-purple-600/20 border border-purple-600/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">SOLVY</h4>
                  <p className="text-purple-300 text-sm mb-3">Revolutionary Vehicle Mechanism Platform</p>
                  <p className="text-gray-300 text-sm mb-4">
                    A platform enabling secure, transparent, and efficient financial transactions across borders.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">○</span>
                      Cross-border payment solutions
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">○</span>
                      Decentralized remittance system
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">○</span>
                      Smart contract automation
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">○</span>
                      Comprehensive financial tools
                    </li>
                  </ul>
                </div>

                {/* MAN */}
                <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">MAN</h4>
                  <p className="text-green-300 text-sm mb-3">Mandatory Audit Network</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Comprehensive tracking and monitoring system with Stripe-Taxually integration for automated tax calculations and compliance across jurisdictions.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">○</span>
                      Real-time transaction monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">○</span>
                      Automated multi-jurisdiction tax calculations via Taxually
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">○</span>
                      Transparent audit trails with blockchain
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">○</span>
                      Financial reporting & analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education

