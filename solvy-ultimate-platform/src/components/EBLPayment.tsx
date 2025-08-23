import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MapPin, 
  CreditCard, 
  Smartphone, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign
} from 'lucide-react'
import eblLogo from '../assets/ebl-logo.png'

interface EBLPaymentProps {
  currentUser: any
}

const EBLPayment: React.FC<EBLPaymentProps> = ({ currentUser }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [paymentAmount, setPaymentAmount] = useState('')
  const [activeTab, setActiveTab] = useState('payment')

  const services = {
    nail: [
      { id: 'classic-manicure', name: 'Classic Manicure', duration: '45 min' },
      { id: 'classic-pedicure', name: 'Classic Pedicure', duration: '60 min' },
      { id: 'gel-manicure', name: 'Gel Manicure', duration: '60 min' },
      { id: 'nail-art', name: 'Nail Art', duration: '30 min' }
    ],
    hair: [
      { id: 'cut-style', name: 'Cut & Style', duration: '90 min' },
      { id: 'hair-color', name: 'Hair Color', duration: '180 min' },
      { id: 'highlights', name: 'Highlights', duration: '240 min' },
      { id: 'deep-treatment', name: 'Deep Treatment', duration: '60 min' }
    ],
    waxing: [
      { id: 'eyebrow-wax', name: 'Eyebrow Wax', duration: '20 min' },
      { id: 'lip-wax', name: 'Lip Wax', duration: '15 min' },
      { id: 'full-leg-wax', name: 'Full Leg Wax', duration: '60 min' },
      { id: 'brazilian-wax', name: 'Brazilian Wax', duration: '45 min' }
    ],
    specialty: [
      { id: 'threading', name: 'Threading (Face)', duration: '30 min' },
      { id: 'real-eyelashes', name: 'Real Eyelash Extensions', duration: '120 min' },
      { id: 'body-waxing', name: 'Body Waxing (Any Part)', duration: '30-90 min' }
    ]
  }

  const locations = [
    {
      id: 'hbl',
      name: 'HBL (Highland Beauty Lounge)',
      address: 'Overture Highlands, Arlington, TX',
      services: ['nail'],
      description: 'Nail services only - Market pricing'
    },
    {
      id: 'seleno',
      name: 'Seleno Location',
      address: 'Harris Rd, Arlington, TX',
      services: ['nail', 'hair', 'waxing', 'specialty'],
      description: 'Full services - Below market pricing, private setting'
    }
  ]

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const getAvailableServices = () => {
    const location = locations.find(loc => loc.id === selectedLocation)
    if (!location) return []
    
    return location.services.flatMap(category => services[category as keyof typeof services])
  }

  const handlePayment = async (method: string) => {
    if (!paymentAmount || !clientInfo.name || !clientInfo.phone) {
      alert('Please fill in all required fields and enter payment amount')
      return
    }

    // Simulate payment processing
    console.log('Processing payment:', {
      method,
      amount: paymentAmount,
      client: clientInfo,
      services: selectedServices,
      location: selectedLocation
    })

    alert(`Payment of $${paymentAmount} processed successfully via ${method}!`)
  }

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <img 
              src={eblLogo} 
              alt="EBL Logo" 
              className="h-16 w-16 mr-4"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Evergreen Beauty Lounge</h1>
              <p className="text-lg text-gray-300">Texas Licensed Cosmetologist</p>
            </div>
            <img 
              src={eblLogo} 
              alt="EBL Logo" 
              className="h-16 w-16 ml-4"
            />
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>SOLVY Payment Partner</span>
            </div>
            <div className="flex items-center text-blue-400">
              <Star className="h-5 w-5 mr-2" />
              <span>Secure Payments</span>
            </div>
          </div>

          {/* Call Button */}
          <a
            href="tel:9294295994"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 mb-8"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call (929) 429-5994 for Consultation & Pricing
          </a>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
            {[
              { id: 'payment', label: 'Payment', icon: DollarSign },
              { id: 'client', label: 'Client Info', icon: Phone },
              { id: 'services', label: 'Services', icon: Star },
              { id: 'solvy', label: 'SOLVY Card', icon: CreditCard }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
        >
          {/* Payment Tab */}
          {activeTab === 'payment' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Payment Processing</h2>
              
              {/* Payment Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Payment Amount *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Order Summary */}
              {(selectedServices.length > 0 || paymentAmount) && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Order Summary</h3>
                  {selectedServices.length > 0 && (
                    <div className="mb-2">
                      <p className="text-gray-300">Selected Services:</p>
                      <ul className="list-disc list-inside text-sm text-gray-400">
                        {selectedServices.map(serviceId => {
                          const service = Object.values(services).flat().find(s => s.id === serviceId)
                          return service ? <li key={serviceId}>{service.name}</li> : null
                        })}
                      </ul>
                    </div>
                  )}
                  {paymentAmount && (
                    <div className="text-xl font-bold text-green-400">
                      Total Amount: ${paymentAmount}
                    </div>
                  )}
                </div>
              )}

              {/* Client Information Display */}
              <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Client Information</h3>
                <div className="text-gray-300">
                  <p><strong>Name:</strong> {clientInfo.name || 'Not provided'}</p>
                  <p><strong>Phone:</strong> {clientInfo.phone || 'Not provided'}</p>
                  <p><strong>Email:</strong> {clientInfo.email || 'Not provided'}</p>
                  <p><strong>Location:</strong> {selectedLocation ? locations.find(l => l.id === selectedLocation)?.name : 'Not selected'}</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <button
                  onClick={() => handlePayment('Credit/Debit Card')}
                  disabled={!paymentAmount || !clientInfo.name || !clientInfo.phone}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Pay with Credit/Debit Card
                  <span className="ml-2 text-sm">(Secure payment via Stripe)</span>
                </button>

                <button
                  onClick={() => handlePayment('Zelle')}
                  disabled={!paymentAmount || !clientInfo.name || !clientInfo.phone}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  Pay with Zelle
                  <span className="ml-2 text-sm">(Quick bank transfer)</span>
                </button>

                <button
                  onClick={() => handlePayment('SOLVY Card')}
                  disabled={!paymentAmount || !clientInfo.name || !clientInfo.phone || !currentUser}
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Pay with SOLVY Card
                  <span className="ml-2 text-sm">{currentUser ? '(Earn rewards!)' : '(Sign up required)'}</span>
                </button>
              </div>

              {(!paymentAmount || !clientInfo.name || !clientInfo.phone) && (
                <div className="mt-4 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-300 text-sm">
                    Please enter payment amount and provide your name and phone number to proceed with payment.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Client Info Tab */}
          {activeTab === 'client' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Client Information</h2>
              
              {/* Location Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Location *
                </label>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedLocation === location.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedLocation(location.id)}
                    >
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                        <div>
                          <h3 className="text-white font-semibold">{location.name}</h3>
                          <p className="text-gray-300 text-sm">{location.address}</p>
                          <p className="text-gray-400 text-xs mt-1">{location.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">Email is optional but recommended for digital receipts</p>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Available Services</h2>
              
              {!selectedLocation ? (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300">Please select a location in the Client Info tab to view available services.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {locations.find(loc => loc.id === selectedLocation)?.services.map((category) => (
                    <div key={category}>
                      <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                        {category === 'specialty' ? 'Specialty Services' : `${category} Care`}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services[category as keyof typeof services].map((service) => (
                          <div
                            key={service.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedServices.includes(service.id)
                                ? 'border-purple-500 bg-purple-500/20'
                                : 'border-white/20 bg-white/5 hover:bg-white/10'
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-white font-medium">{service.name}</h4>
                                <p className="text-gray-400 text-sm">{service.duration}</p>
                              </div>
                              {selectedServices.includes(service.id) && (
                                <CheckCircle className="h-5 w-5 text-purple-400" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <p className="text-blue-300 text-sm">
                      <strong>Note:</strong> Final pricing is determined during consultation based on service complexity, 
                      hair length/condition, and location. Call (929) 429-5994 for accurate pricing.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SOLVY Card Tab */}
          {activeTab === 'solvy' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">SOLVY Card Benefits</h2>
              
              {currentUser ? (
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Your SOLVY Card</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-300">Card Number: •••• •••• •••• 0000</p>
                        <p className="text-gray-300">Balance: $0.00</p>
                        <p className="text-gray-300">Rewards Points: 0</p>
                      </div>
                      <div>
                        <p className="text-gray-300">SOVEREIGNITITY™ Score: 0</p>
                        <p className="text-gray-300">GUAPCOIN Balance: 0</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">EBL Rewards</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• 5% cashback on EBL services</li>
                        <li>• Loyalty points for free services</li>
                        <li>• Priority booking</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">SOLVY Network</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Use at partner businesses</li>
                        <li>• Lower fees than traditional cards</li>
                        <li>• Earn GUAPCOIN rewards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Get Your SOLVY Card</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Join the SOLVY ecosystem and start earning rewards on every purchase. 
                    Connect your financial power to African diaspora empowerment through SOVEREIGNITITY™.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="text-white font-semibold">SOVEREIGNITITY™</h4>
                      <p className="text-sm text-gray-400">Earn from your data</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <Coins className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="text-white font-semibold">GUAPCOIN</h4>
                      <p className="text-sm text-gray-400">Blockchain rewards</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-white font-semibold">AES Investment</h4>
                      <p className="text-sm text-gray-400">Fund African development</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => window.location.href = '/sovereignitity'}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Start Your SOVEREIGNITITY™ Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default EBLPayment

