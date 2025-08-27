import React from 'react'
import { motion } from 'framer-motion'
import { 
  Scale, 
  Shield, 
  Users, 
  BookOpen, 
  Eye, 
  Lightbulb, 
  GraduationCap,
  Target,
  ArrowRight,
  Sun,
  ExternalLink,
  Facebook
} from 'lucide-react'

const DECIDEY: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DECIDEY NGO
          </h1>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Pronunciation: <span className="text-blue-300">dee-SEE-day</span></h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              <strong>DECIDEY</strong> celebrates the wisdom that comes from both formal education and life experience. 
              We believe knowledge should illuminate practical solutions and empower communities to build wealth and independence together.
            </p>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Digital rights advocacy and education for the African diaspora, promoting data sovereignty, 
            financial literacy, and cooperative economics through inclusive learning that honors all paths to wisdom.
          </p>
        </motion.div>

        {/* YouTube Education Acknowledgment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Proudly Acknowledging YouTube Education</h3>
            <p className="text-lg text-gray-300 text-center mb-6">
              We recognize YouTube as a powerful educational platform that has democratized access to knowledge. 
              Many of our insights come from brilliant educators who share their expertise freely.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="bg-white/5 rounded-lg p-3">
                <h4 className="font-semibold text-white mb-2">Economic Education</h4>
                <ul className="space-y-1">
                  <li>• Lena Petrova</li>
                  <li>• Professor Richard Wolff</li>
                  <li>• Professor Michael Hudson</li>
                  <li>• Ellen Brown</li>
                  <li>• Nelson Nash Institute</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <h4 className="font-semibold text-white mb-2">Geopolitical Analysis</h4>
                <ul className="space-y-1">
                  <li>• Professor Jeffrey Sachs</li>
                  <li>• Shahid Bolson</li>
                  <li>• Geopolitical Economy Report</li>
                  <li>• Cyrus Janssen</li>
                  <li>• Think globally</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <h4 className="font-semibold text-white mb-2">Social & Financial</h4>
                <ul className="space-y-1">
                  <li>• Tim Wise</li>
                  <li>• Carol Anderson</li>
                  <li>• PanaGenius TV/The Breakdown</li>
                  <li>• Sean Foo</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect with Our Thinking */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Connect with Our Thinking</h3>
            <p className="text-lg text-gray-300 text-center mb-6">
              For transparency and deeper understanding of our approach to cooperative economics and financial sovereignty, 
              we invite you to explore our thought process and community discussions.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://www.facebook.com/SANathanLLC/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Facebook className="h-5 w-5 mr-2" />
                Follow SA Nathan LLC on Facebook
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Education Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Inclusive Education Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges in Current System */}
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-orange-400 mr-3" />
                <h4 className="text-xl font-semibold text-orange-300">Current Educational Challenges</h4>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Overemphasis on credentials without practical application
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Educational debt without corresponding income potential
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Disconnect between academic theory and real-world solutions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Limited recognition of alternative learning paths
                </li>
              </ul>
            </div>

            {/* DECIDEY Approach */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-yellow-400 mr-3" />
                <h4 className="text-xl font-semibold text-green-300">DECIDEY's Inclusive Approach</h4>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Honor all forms of education and life experience
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Bridge academic knowledge with practical application
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Create pathways for knowledge to generate community wealth
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Welcome wisdom from all backgrounds and experiences
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Understanding the Banking System */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Financial Education: Understanding the Banking System</h3>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Ellen Brown's "Web of Debt" Revelations</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                    The Federal Reserve is privately owned, not a government institution
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                    Money is created as debt, with interest that can never be fully repaid
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                    Banks create money from nothing when they issue loans
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                    The debt-based monetary system ensures perpetual scarcity
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-300">SOLVY's Alternative Approach</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                    SOVEREIGNITITY™ creates data ownership and value
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                    SOVEREIGNITITY™ LIFE PROGRAM democratizes wealth-building strategies
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                    Cooperative economics breaks debt dependency
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                    Community-owned financial infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Possibilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Future Collaborative Possibilities</h3>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30">
            <p className="text-lg text-gray-300 text-center mb-6">
              As SOLVY grows and demonstrates value, we envision exciting collaborations that could transform 
              financial sovereignty for the African diaspora and beyond.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Web3 Integration</h4>
                <p className="text-gray-300 text-sm">
                  Leveraging our Ethereum-ready and Polygon-integrated infrastructure to create 
                  decentralized educational resources and community-driven learning platforms.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Blockchain Education</h4>
                <p className="text-gray-300 text-sm">
                  Educational programs focused on blockchain technology, cryptocurrency literacy, 
                  and decentralized finance to empower community economic participation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SOLVY Ecosystem Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Current SOLVY Ecosystem</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* DECIDEY */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold">DECIDEY NGO</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Digital rights advocacy and inclusive education that honors all forms of wisdom 
                while building practical solutions for community empowerment.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Financial literacy education</li>
                <li>• Data sovereignty training</li>
                <li>• Cooperative economics workshops</li>
                <li>• Digital rights advocacy</li>
              </ul>
            </div>

            {/* SOLVY */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-400 mr-3" />
                <h4 className="text-lg font-semibold">SOLVY Platform</h4>
              </div>
              <p className="text-gray-300 mb-4">
                The technological infrastructure providing SOVEREIGNITITY™, 
                SOLVY Card, SOVEREIGNITITY™ LIFE PROGRAM, and cooperative financial services.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Self-sovereign identity management</li>
                <li>• Cooperative payment processing</li>
                <li>• Data monetization platform</li>
                <li>• Member-owned life insurance</li>
              </ul>
            </div>

            {/* MAN */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-400 mr-3" />
                <h4 className="text-lg font-semibold">MAN Network</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Security and audit network ensuring the integrity and 
                transparency of all SOLVY ecosystem operations.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Security auditing and monitoring</li>
                <li>• Transparency verification</li>
                <li>• Community governance oversight</li>
                <li>• Risk assessment and mitigation</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join the DECIDEY Movement</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Bring your education, experience, and wisdom to build cooperative solutions. 
            Together, we can create financial sovereignty and community empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
              Start Learning
            </button>
            <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Join Our Community
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DECIDEY

