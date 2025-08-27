import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Plus, TrendingUp, Settings, Eye, EyeOff, Play, Pause } from 'lucide-react'
import solvyLogo from '../assets/solvy-logo.png'
import solvyFullLogo from '../assets/solvy-full-logo.png'
import solvyCardImage from '../assets/SOLVYCard.png'
import solvyFront from '../assets/solvy-front.png'
import solvyCardVideo from '../assets/solvy-card-video.mp4'

interface User {
  id: string
  username: string
  email: string
}

interface SolvyCardProps {
  currentUser: User | null
}

const SolvyCard: React.FC<SolvyCardProps> = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [cardView, setCardView] = useState<'front' | 'back'>('front')
  const [showBalance, setShowBalance] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const cardData = {
    cardNumber: '•••• •••• •••• 8000',
    expiryDate: '12/28',
    balance: 2847.50,
    sovereignitityScore: 85,
    guapcoinBalance: 1250
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const setVideoRef = (ref: HTMLVideoElement | null) => {
    if (ref) {
      videoRef.current = ref
    }
  }

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section with Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - SOLVY Branding */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <img 
                  src={solvyFullLogo} 
                  alt="SOLVY - Solution Valued You" 
                  className="h-32 w-auto mx-auto lg:mx-0"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Your SOLVY Card
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Experience true financial sovereignty with your personalized SOLVY Card. 
                  track your SOVEREIGNITITY™ score, and take control 
                  of your financial future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Your Card
                  </button>
                  <button className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side - SOLVY Card Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img 
                  src={solvyCardImage} 
                  alt="SOLVY Card" 
                  className="w-full max-w-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  SOVEREIGNITITY™ Ready
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video and Platform Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">SOLVY Card: Transforming Digital Finance</h3>
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-white mb-4 mx-auto" />
                  <h4 className="text-xl font-bold text-white mb-2">SOLVY Card Video</h4>
                  <p className="text-gray-300 text-sm">Transforming Digital Finance</p>
                  <p className="text-gray-400 text-xs mt-2">Video will be available after deployment</p>
                </div>
              </div>
              <p className="text-gray-300 mt-4">
                Discover how SOLVY Card is revolutionizing financial services with blockchain technology, 
                SOVEREIGNITITY™ data ownership, and cooperative economics.
              </p>
            </div>

            {/* Platform Interface Showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Complete SOLVY Platform</h3>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={solvyFront} 
                  alt="SOLVY Platform Interface" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
              </div>
              <p className="text-gray-300 mt-4">
                Access the complete SOLVY ecosystem: Education, Reign products, 
                MAN Network security - all in one platform.
              </p>
            </div>
          </div>
        </motion.div>

        {/* User Authentication Check */}
        {!currentUser ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Sign In to Access Your SOLVY Card</h2>
              <p className="text-gray-300 mb-6">
                Please sign in to view your card details, manage your account, and access SOVEREIGNITITY™ features.
              </p>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300">
                Sign In
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Card Display */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <div className="max-w-md mx-auto">
                <div className="relative">
                  {/* Card Front/Back Toggle */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
                      <button
                        onClick={() => setCardView('front')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          cardView === 'front'
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        Front
                      </button>
                      <button
                        onClick={() => setCardView('back')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          cardView === 'back'
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        Back
                      </button>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    key={cardView}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {cardView === 'front' ? (
                      <div className="relative">
                        <img 
                          src={solvyCardImage} 
                          alt="SOLVY Card Front" 
                          className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                        />
                        {/* Overlay for dynamic content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white rounded-2xl">
                          <div className="flex justify-between items-start">
                            <div>
                              <img 
                                src={solvyLogo} 
                                alt="SOLVY Logo" 
                                className="h-8 w-8"
                              />
                            </div>
                            <div className="text-right">
                              <p className="text-xs opacity-75">SOVEREIGNITITY™</p>
                              <p className="text-lg font-semibold">{cardData.sovereignitityScore}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <p className="text-xs opacity-75 mb-1">Card Number</p>
                              <p className="text-lg font-mono tracking-wider">{cardData.cardNumber}</p>
                            </div>
                            
                            <div className="flex justify-between">
                              <div>
                                <p className="text-xs opacity-75 mb-1">Valid Thru</p>
                                <p className="text-sm font-mono">{cardData.expiryDate}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs opacity-75 mb-1">Balance</p>
                                <p className="text-lg font-semibold">
                                  {showBalance ? `$${cardData.balance.toFixed(2)}` : '••••••'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden max-w-sm mx-auto">
                        {/* Card Back Design */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                          <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rounded-lg"></div>
                        </div>
                        
                        <div className="relative z-10">
                          {/* Magnetic Strip */}
                          <div className="h-12 bg-black/30 rounded mb-6"></div>
                          
                          <div className="mb-6">
                            <div className="bg-white/20 rounded p-3 mb-4">
                              <p className="text-xs opacity-75 mb-1">CVV</p>
                              <p className="font-mono">•••</p>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <img 
                              src={solvyLogo} 
                              alt="SOLVY Logo" 
                              className="h-12 w-12 mx-auto mb-2"
                            />
                            <p className="text-sm opacity-90">Solutions Valued You</p>
                            <p className="text-xs opacity-75 mt-2">
                              For customer service: (929) 429-5994
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Cooperative Economics Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Breaking Financial Chains</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-orange-500/20 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                      <p className="text-white font-medium">
                        Companies are profiting billions from your data, which they hold captive in their databases—and they're counting on you not realizing its worth. In a vulture economy, businesses circle around individual needs, profiting from vulnerabilities rather than fostering growth.
                      </p>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      Your journey with us begins with foundational education in economic autonomy and learning to practice sovereignty through self-sovereign identity. Whether you're an individual or small business, you'll learn to leverage infinite banking principles to build true independence.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 mb-6">
                      As a cooperative member, you'll not only create a more sustainable and resilient business but also share in the ecosystem's profitability—making you both an owner and beneficiary of our collective success.
                    </p>
                    
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                      <p className="text-blue-300 font-semibold mb-2">Solvy.chain:</p>
                      <p className="text-white">
                        We're breaking those chains, building a cooperative, DAO-driven future where trade and commerce are mutually beneficial and truly empower individuals.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
                      Become a Member
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                      View Governance
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
                {[
                  { id: 'overview', label: 'Overview', icon: CreditCard },
                  { id: 'load', label: 'Load Funds', icon: Plus },
                  { id: 'transactions', label: 'Transactions', icon: TrendingUp },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Account Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-purple-600/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Current Balance</h4>
                      <p className="text-3xl font-bold text-purple-300">${cardData.balance.toFixed(2)}</p>
                    </div>
                    <div className="bg-blue-600/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">SOVEREIGNITITY™ Score</h4>
                      <p className="text-3xl font-bold text-blue-300">{cardData.sovereignitityScore}</p>
                    </div>
                    <div className="bg-green-600/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-2"> Balance</h4>
                      <p className="text-3xl font-bold text-green-300">{cardData.guapcoinBalance}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'load' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Load Funds</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-600/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Bank Transfer</h4>
                      <p className="text-gray-300 mb-4">Transfer funds directly from your bank account</p>
                      <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                        Connect Bank Account
                      </button>
                    </div>
                    <div className="bg-purple-600/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Debit Card</h4>
                      <p className="text-gray-300 mb-4">Load funds using your existing debit card</p>
                      <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors">
                        Add Debit Card
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transactions' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Transactions</h3>
                  <div className="space-y-4">
                    {[
                      { merchant: 'Evergreen Beauty Lounge', amount: -45.00, date: '2024-08-22', type: 'EBL Payment' },
                      { merchant: ' Reward', amount: +12.50, date: '2024-08-22', type: 'Reward' },
                      { merchant: 'Reign Products', amount: -30.00, date: '2024-08-21', type: 'Purchase' },
                      { merchant: 'Bank Transfer', amount: +500.00, date: '2024-08-20', type: 'Deposit' }
                    ].map((transaction, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{transaction.merchant}</p>
                          <p className="text-gray-400 text-sm">{transaction.type} • {transaction.date}</p>
                        </div>
                        <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Card Settings</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">Show Balance</h4>
                        <p className="text-gray-400 text-sm">Display your balance on the card</p>
                      </div>
                      <button
                        onClick={() => setShowBalance(!showBalance)}
                        className={`p-2 rounded-lg transition-colors ${
                          showBalance ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {showBalance ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">SOVEREIGNITITY™ Tracking</h4>
                        <p className="text-gray-400 text-sm">Enable data sovereignty scoring</p>
                      </div>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                        Enabled
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default SolvyCard

