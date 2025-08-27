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
      { id: 'lash-extensions', name: 'Lash Extensions', duration: '120 min' },
      { id: 'microblading', name: 'Microblading', duration: '180 min' }
    ]
  }

  const locations = [
    {
      id: 'hbl',
      name: 'HBL Overture Highlands',
      address: '250 W Arbrook Blvd, Arlington, TX',
      services: ['nail'],
      description: 'Nail services only'
    },
    {
      id: 'seleno',
      name: 'Seleno Location', 
      address: '1205 W Harris Rd, Arlington, TX',
      services: ['nail', 'hair', 'waxing', 'specialty'],
      description: 'Full service location'
    }
  ]

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const handlePayment = () => {
    if (!currentUser) {
      alert('Please log in to use SOLVY Card payment')
      return
    }
    
    alert(`Payment processed with SOLVY Card! Amount: $${paymentAmount}. `)
  }

  const getLocationServices = (locationId: string) => {
    const location = locations.find(loc => loc.id === locationId)
    if (!location) return []
    
    return location.services.flatMap(serviceType => 
      services[serviceType as keyof typeof services] || []
    )
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
            <img src={eblLogo} alt="EBL Logo" className="h-16 w-16 mr-4" />
            <h1 className="text-4xl font-bold text-white">Evergreen Beauty Lounge</h1>
            <img src={eblLogo} alt="EBL Logo" className="h-16 w-16 ml-4" />
          </div>
          <p className="text-xl text-gray-300 mb-4">
            Premium Beauty Services - Pay with Your SOLVY Card
          </p>
          <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30 max-w-2xl mx-auto">
            <p className="text-blue-300 font-medium">
              💳 Use your SOLVY Card for all EBL services and earn rewards with every transaction!
            </p>
          </div>
        </motion.div>

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

        {/* Contact Information */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-6 border border-green-500/30 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">📱 Contact Evergreen Beauty Lounge</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong className="text-green-300">For fastest response:</strong> Text (929) 429-5994
              </p>
              <p className="text-gray-300">
                <strong className="text-blue-300">Please specify which facility:</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-medium text-white">HBL Overture Highlands</div>
                  <div className="text-sm text-gray-300">250 W Arbrook Blvd, Arlington, TX</div>
                  <div className="text-xs text-blue-300">Nail services only</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-medium text-white">Seleno Location</div>
                  <div className="text-sm text-gray-300">1205 W Harris Rd, Arlington, TX</div>
                  <div className="text-xs text-purple-300">Full service location</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                href="sms:9294295994"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300"
              >
                💬 Text (929) 429-5994 - Fastest Response
              </a>
              <a
                href="tel:9294295994"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-500 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (929) 429-5994
              </a>
            </div>
          </div>
        </div>

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
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ${
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Payment Options</h3>
              
              {/* Location Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Location
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        selectedLocation === location.id
                          ? 'border-purple-500 bg-purple-900/20'
                          : 'border-gray-600 bg-white/5 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{location.name}</h4>
                        <MapPin className="h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{location.address}</p>
                      <p className="text-xs text-blue-300">{location.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Payment Amount
                </label>
                <input
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <h4 className="font-medium text-white">Payment Methods</h4>
                
                {/* SOLVY Card - Primary */}
                <div className="p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-purple-400 mr-3" />
                      <div>
                        <div className="font-medium text-white">SOLVY Card (Recommended)</div>
                        <div className="text-sm text-purple-300"></div>
                      </div>
                    </div>
                    <button
                      onClick={handlePayment}
                      disabled={!paymentAmount || !selectedLocation}
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Pay with SOLVY Card
                    </button>
                  </div>
                </div>

                {/* Other Payment Methods */}
                <div className="p-4 bg-white/5 rounded-lg border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="font-medium text-white">Credit/Debit Card</div>
                        <div className="text-sm text-gray-400">Standard payment processing</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors">
                      Pay with Card
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Smartphone className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="font-medium text-white">Zelle</div>
                        <div className="text-sm text-gray-400">Quick mobile payment</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors">
                      Pay with Zelle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'client' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Client Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Available Services</h3>
              
              {selectedLocation ? (
                <div className="space-y-6">
                  {Object.entries(services).map(([category, serviceList]) => {
                    const location = locations.find(loc => loc.id === selectedLocation)
                    if (!location?.services.includes(category)) return null

                    return (
                      <div key={category} className="space-y-3">
                        <h4 className="text-lg font-medium text-white capitalize">{category} Services</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {serviceList.map((service) => (
                            <div
                              key={service.id}
                              onClick={() => handleServiceToggle(service.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                                selectedServices.includes(service.id)
                                  ? 'border-purple-500 bg-purple-900/20'
                                  : 'border-gray-600 bg-white/5 hover:border-gray-500'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-white">{service.name}</div>
                                  <div className="text-sm text-gray-400">{service.duration}</div>
                                </div>
                                {selectedServices.includes(service.id) && (
                                  <CheckCircle className="h-5 w-5 text-purple-400" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Please select a location first to view available services</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'solvy' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">SOLVY Card Benefits</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-purple-300">Why Use SOLVY Card?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300"></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Build your SOVEREIGNITITY™ score</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Secure, encrypted transactions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Support cooperative economics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-blue-300">Rewards Program</h4>
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">2% Rewards</div>
                      <div className="text-sm text-purple-300">Earned on every EBL transaction</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    GUAPCOIN can be used for future services, transferred to other SOLVY members, 
                    or saved for cooperative investment opportunities.
                  </p>
                </div>
              </div>

              {!currentUser && (
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-300">
                      <strong>Get Your SOLVY Card:</strong> Sign up for a SOLVY account to access card benefits and rewards
                    </span>
                  </div>
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

