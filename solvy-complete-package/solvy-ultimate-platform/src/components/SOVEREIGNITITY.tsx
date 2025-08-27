import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  User, 
  Coins, 
  TrendingUp, 
  Eye, 
  Lock, 
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign
} from 'lucide-react'

interface SOVEREIGNITITYProps {
  currentUser: any
}

const SOVEREIGNITITY: React.FC<SOVEREIGNITITYProps> = ({ currentUser }) => {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    agreeToTerms: false,
    dataMonetization: false,
    polygonID: false
  })

  const steps = [
    {
      id: 1,
      title: 'Understanding SOVEREIGNITITY™',
      description: 'Learn about self-sovereign identity and economic empowerment'
    },
    {
      id: 2,
      title: 'Create Your Identity',
      description: 'Set up your secure, self-owned digital identity'
    },
    {
      id: 3,
      title: 'Enable Data Monetization',
      description: 'Start earning from your data and participation'
    },
    {
      id: 4,
      title: 'Join the Network',
      description: 'Connect to cooperative wealth building opportunities'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Self-Sovereign Identity',
      description: 'You own and control your digital identity completely',
      color: 'text-blue-400'
    },
    {
      icon: DollarSign,
      title: 'Data Monetization',
      description: 'Earn income from your data instead of giving it away free',
      color: 'text-green-400'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Zero-knowledge proofs protect your privacy while enabling verification',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect to African diaspora and continental development',
      color: 'text-yellow-400'
    }
  ]

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('SOVEREIGNITITY™ registration:', formData)
    alert('Welcome to SOVEREIGNITITY™! Your journey to financial sovereignty begins now.')
  }

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-purple-400 mr-4" />
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                SOVEREIGNITITY™
              </h1>
              <p className="text-xl text-gray-300 mt-2">
                Self-Sovereign Identity + Economic Sovereignty
              </p>
            </div>
            <Shield className="h-16 w-16 text-purple-400 ml-4" />
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Revolutionary concept combining <strong>self-sovereign identity</strong> with 
            <strong> economic empowerment</strong>. Own your data, earn from your participation, 
            and connect to global African diaspora development through cooperative financial networks.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                      activeStep >= step.id
                        ? 'bg-purple-600 border-purple-600 text-white'
                        : 'border-gray-400 text-gray-400 hover:border-purple-400'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    {activeStep > step.id ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 transition-all duration-300 ${
                        activeStep > step.id ? 'bg-purple-600' : 'bg-gray-400'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-white">{steps[activeStep - 1].title}</h2>
            <p className="text-gray-300">{steps[activeStep - 1].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
        >
          {/* Step 1: Understanding */}
          {activeStep === 1 && (
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                What is SOVEREIGNITITY™?
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="p-6 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-3">The Problem</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Big Tech companies profit from your data while you get nothing</li>
                      <li>• Your digital identity is controlled by corporations</li>
                      <li>• African diaspora wealth doesn't flow back to continental development</li>
                      <li>• Traditional financial systems exclude and exploit communities</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-3">The SOVEREIGNITITY™ Solution</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong>You own</strong> your digital identity completely</li>
                      <li>• <strong>You earn</strong> from your data and participation</li>
                      <li>• <strong>You connect</strong> to African development through cooperative rewards</li>
                      <li>• <strong>You control</strong> your financial sovereignty</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-16 w-16 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">SOVEREIGNITITY™</h4>
                    <p className="text-gray-300">
                      <strong>SOVEREIGN</strong> (self-governing) + <strong>IDENTITY</strong> (who you are) + 
                      <strong>TITY</strong> (economic entity) = Complete self-ownership
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg text-center">
                        <benefit.icon className={`h-8 w-8 ${benefit.color} mx-auto mb-2`} />
                        <h5 className="text-white font-semibold text-sm">{benefit.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleNextStep}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Create Identity */}
          {activeStep === 2 && (
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Create Your Self-Sovereign Identity
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                          className="mt-1 mr-3"
                          required
                        />
                        <span className="text-sm text-gray-300">
                          I agree to the SOVEREIGNITITY™ terms and understand that I will own and control my digital identity completely.
                        </span>
                      </label>

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          checked={formData.dataMonetization}
                          onChange={(e) => setFormData(prev => ({ ...prev, dataMonetization: e.target.checked }))}
                          className="mt-1 mr-3"
                        />
                        <span className="text-sm text-gray-300">
                          Enable data monetization - I want to earn income from my data and participation in the SOLVY ecosystem.
                        </span>
                      </label>

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          checked={formData.polygonID}
                          onChange={(e) => setFormData(prev => ({ ...prev, polygonID: e.target.checked }))}
                          className="mt-1 mr-3"
                        />
                        <span className="text-sm text-gray-300">
                          Set up Polygon ID for zero-knowledge proof verification (recommended for maximum privacy).
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-3">What You Get</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        Self-owned digital identity
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        SOLVY debit card eligibility
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        Cooperative earning potential
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        Cooperative investment access
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        Data monetization income
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-3">Privacy & Security</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center">
                        <Lock className="h-5 w-5 text-purple-400 mr-2" />
                        Zero-knowledge proofs
                      </li>
                      <li className="flex items-center">
                        <Shield className="h-5 w-5 text-purple-400 mr-2" />
                        Blockchain-secured identity
                      </li>
                      <li className="flex items-center">
                        <Eye className="h-5 w-5 text-purple-400 mr-2" />
                        You control data sharing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!formData.fullName || !formData.email || !formData.phone || !formData.agreeToTerms}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Create Identity
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Data Monetization */}
          {activeStep === 3 && (
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Enable Data Monetization
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-3">How You Earn</h4>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start">
                        <DollarSign className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                        <div>
                          <strong>Transaction Participation:</strong> Earn cooperative rewards for every transaction
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Coins className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <div>
                          <strong>Data Sharing:</strong> Choose what data to share and earn from its use
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                        <div>
                          <strong>Network Growth:</strong> Earn referral bonuses for bringing new members
                        </div>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                        <div>
                          <strong>Cooperative Investment:</strong> Earn returns from African development projects
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <h4 className="text-xl font-semibold text-white mb-3">Your Control</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Choose exactly what data to monetize</li>
                      <li>• Set your own pricing for data access</li>
                      <li>• Revoke access at any time</li>
                      <li>• Track all earnings transparently</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-16 w-16 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Estimated Monthly Earnings</h4>
                    <div className="text-3xl font-bold text-green-400 mb-2">$50 - $500+</div>
                    <p className="text-gray-300 text-sm">
                      Based on participation level and data sharing preferences
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg text-center">
                      <Coins className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-xl font-bold text-white">Cooperative Rewards</div>
                      <div className="text-sm text-gray-400">Blockchain rewards</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg text-center">
                      <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <div className="text-xl font-bold text-white">USD</div>
                      <div className="text-sm text-gray-400">Direct payments</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-yellow-500 transition-all duration-300"
                >
                  Enable Monetization
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Join Network */}
          {activeStep === 4 && (
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Welcome to the SOLVY Network!
              </h3>
              
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-16 w-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Your SOVEREIGNITITY™ Journey Begins Now!
                </h4>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  You've successfully created your self-sovereign identity and joined the global network 
                  connecting African diaspora financial power to continental development.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-purple-500/20 border border-purple-500/30 rounded-lg text-center">
                  <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-white mb-2">Identity Created</h5>
                  <p className="text-gray-300">Your self-sovereign identity is secured on the blockchain</p>
                </div>
                
                <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
                  <CreditCard className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-white mb-2">SOLVY Card Ready</h5>
                  <p className="text-gray-300">Your debit card application is being processed</p>
                </div>
                
                <div className="p-6 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-center">
                  <Coins className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-white mb-2">Cooperative Rewards Active</h5>
                  <p className="text-gray-300">Start earning blockchain rewards immediately</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">Next Steps</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-blue-400 mr-2" />
                      Try the EBL Payment system to see SOLVY in action
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-blue-400 mr-2" />
                      Explore Cooperative Rewards earning opportunities
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-blue-400 mr-2" />
                      Learn about cooperative investment partnerships
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-blue-400 mr-2" />
                      Invite friends to grow the network
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">Your Impact</h4>
                  <p className="text-gray-300 mb-4">
                    By joining SOVEREIGNITITY™, you're part of a movement that:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Empowers African diaspora economic sovereignty</li>
                    <li>• Funds continental African development projects</li>
                    <li>• Challenges surveillance capitalism</li>
                    <li>• Builds cooperative financial infrastructure</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/ebl'}
                    className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                  >
                    Try EBL Payment Demo
                  </button>
                  <button
                    onClick={() => window.location.href = '/guapcoin'}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
                  >
                    Explore Cooperative Rewards
                  </button>
                  <button
                    onClick={() => window.location.href = '/aes'}
                    className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Cooperative Investment
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SOVEREIGNITITY

