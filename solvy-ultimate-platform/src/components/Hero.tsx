import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CreditCard, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Coins,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import solvyFullLogo from '../assets/solvy-full-logo.png'
import focusGirl from '../assets/focus-girl.png'

interface HeroProps {
  currentUser: any
}

const Hero: React.FC<HeroProps> = ({ currentUser }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Full Logo */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <img 
                  src={solvyFullLogo} 
                  alt="SOLVY - Solutions Valued You" 
                  className="h-24 w-auto"
                />
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Financial Sovereignty
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">
                  For the African Diaspora
                </span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
                The ultimate platform connecting African diaspora through 
                <span className="text-purple-400 font-semibold"> SOVEREIGNITITY™</span>, 
                <span className="text-blue-400 font-semibold"> GUAPCOIN</span>, and 
                <span className="text-green-400 font-semibold"> AES Investment Bank</span> partnerships.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {!currentUser ? (
                  <>
                    <Link
                      to="/sovereignitity"
                      className="w-full sm:w-auto rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-purple-500 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-300"
                    >
                      Start Your SOVEREIGNITITY™ Journey
                      <ArrowRight className="ml-2 h-4 w-4 inline" />
                    </Link>
                    <Link
                      to="/ebl"
                      className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      Try EBL Payment Demo <span aria-hidden="true">→</span>
                    </Link>
                  </>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                      to="/card"
                      className="rounded-md bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-green-500 hover:to-blue-500 transition-all duration-300"
                    >
                      Manage SOLVY Card
                    </Link>
                    <Link
                      to="/guapcoin"
                      className="rounded-md bg-gradient-to-r from-yellow-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
                    >
                      View GUAPCOIN Balance
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Column - Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src={focusGirl} 
                  alt="Professional using SOLVY payment system" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Overlay with SOLVY branding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-white font-semibold text-lg">
                      SOLVY Payment Processing
                    </p>
                    <p className="text-gray-300 text-sm">
                      Secure, fast, and rewarding transactions for businesses and customers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Complete Financial Ecosystem
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              From local payments to continental investment - one platform, infinite possibilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EBL Payment System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 text-pink-400" />
                <h3 className="ml-3 text-xl font-semibold text-white">EBL Payment System</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Proven payment processing for Evergreen Beauty Lounge - our first successful client implementation.
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Live & Processing Payments</span>
              </div>
              <Link
                to="/ebl"
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Try Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            {/* SOVEREIGNITITY™ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-purple-400" />
                <h3 className="ml-3 text-xl font-semibold text-white">SOVEREIGNITITY™</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Self-sovereign identity meets economic empowerment. Earn from your data and participation in the ecosystem.
              </p>
              <div className="flex items-center text-yellow-400 text-sm">
                <Star className="h-4 w-4 mr-2" />
                <span>Revolutionary Concept</span>
              </div>
              <Link
                to="/sovereignitity"
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            {/* GUAPCOIN Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Coins className="h-8 w-8 text-yellow-400" />
                <h3 className="ml-3 text-xl font-semibold text-white">GUAPCOIN Network</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Blockchain bridge connecting diaspora wealth to African development through transparent, trackable investments.
              </p>
              <div className="flex items-center text-blue-400 text-sm">
                <Globe className="h-4 w-4 mr-2" />
                <span>Global Impact</span>
              </div>
              <Link
                to="/guapcoin"
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Explore Network <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            {/* AES Investment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <h3 className="ml-3 text-xl font-semibold text-white">AES Investment Bank</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Direct connection to Mali, Niger, and Burkina Faso's revolutionary investment bank for continental development.
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Partnership Ready</span>
              </div>
              <Link
                to="/aes"
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Invest in Africa <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            {/* DECIDEY NGO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-400" />
                <h3 className="ml-3 text-xl font-semibold text-white">DECIDEY NGO</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Continuing the legacy of Marcus Garvey, MLK, and Malcolm X through modern digital civil rights advocacy.
              </p>
              <div className="flex items-center text-blue-400 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                <span>Digital Rights</span>
              </div>
              <Link
                to="/decidey"
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Join Movement <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            {/* MAN Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-orange-400" />
                <h3 className="ml-3 text-xl font-semibold text-white">MAN Network</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Monitoring, Audit, and Network security ensuring transparency and trust across all SOLVY operations.
              </p>
              <div className="flex items-center text-orange-400 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                <span>Security First</span>
              </div>
              <Link
                to="/man"
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Security <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Join the Financial Revolution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              From EBL payments to African continental investment - your journey to financial sovereignty starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sovereignitity"
                className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                Start Your SOVEREIGNITITY™ Journey
              </Link>
              <Link
                to="/ebl"
                className="rounded-md border border-white/20 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Try EBL Payment Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero

