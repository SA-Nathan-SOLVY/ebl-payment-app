import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Heart, 
  Shield, 
  ExternalLink, 
  Package, 
  TrendingUp, 
  BarChart3,
  ShoppingCart,
  Star,
  Users,
  Zap
} from 'lucide-react'

interface ReignProps {
  currentUser: any
}

const Reign: React.FC<ReignProps> = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState('products')

  const reignProducts = [
    {
      name: 'Reign Supreme Monthly Subscription Bundle',
      price: '$30.00',
      description: 'Customers on a monthly subscription plan receive 5 packs of Reign Pads per month.',
      category: 'subscription'
    },
    {
      name: 'Super Heavy Flow',
      price: '$6.00',
      description: 'Ultra thin, super absorbent, extra long design with wings.',
      category: 'heavy'
    },
    {
      name: 'Heavy Flow',
      price: '$6.00',
      description: 'Ultra thin, super absorbent design with wings.',
      category: 'heavy'
    },
    {
      name: 'Moderate Flow',
      price: '$6.00',
      description: 'Ultra thin, super absorbent design with wings.',
      category: 'moderate'
    },
    {
      name: 'Panty Liners',
      price: '$6.00',
      description: 'Very light panty liner for everyday use.',
      category: 'light'
    },
    {
      name: 'Panty Liners With Wings',
      price: '$6.00',
      description: 'Premium sanitary napkin panty liners with wings.',
      category: 'light'
    },
    {
      name: 'Little Long Thong',
      price: '$6.00',
      description: '30 thong panty liners.',
      category: 'specialty'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Crown className="h-16 w-16 text-pink-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Reign Premium Products</h1>
          <p className="text-lg text-gray-300 mb-6">
            Premium women's sanitary napkins with Nobel prize winning Graphene™ - EBL is your authorized distributor
          </p>
          
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold">
              YOUR JEWEL SANITARY NAPKINS LLC. REPRESENTATIVE IS: EVERGREEN BEAUTY LOUNGE REPRESENTATIVE: ID 301272
            </p>
          </div>
          
          {/* Official Reign Website Link */}
          <div className="mt-6 space-y-4">
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-6 border border-pink-500/30 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
                <Crown className="h-6 w-6 mr-2 text-pink-400" />
                Order Reign Products Now
              </h3>
              <p className="text-gray-300 text-center mb-4">
                EBL is your authorized Reign distributor. Order directly through our official Reign website.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://ebl.jewelpads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
                >
                  <Crown className="h-5 w-5 mr-2" />
                  Shop at ebl.jewelpads.com
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <button
                  onClick={() => window.open('tel:+19294295994')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-500 text-pink-300 font-bold rounded-lg hover:bg-pink-500/10 transition-all duration-300"
                >
                  📞 Call (929) 429-5994
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex space-x-1">
            {[
              { id: 'products', label: 'Products', icon: Package },
              { id: 'features', label: 'Features', icon: Star },
              { id: 'ordering', label: 'SOLVY Ordering', icon: ShoppingCart },
              { id: 'inventory', label: 'Inventory Intelligence', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-pink-600 text-white'
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
          {/* Products Tab */}
          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Reign Premium Product Line</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reignProducts.map((product, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-lg hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Package className="h-6 w-6 text-pink-400 mr-3" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                        <p className="text-2xl font-bold text-pink-400">{product.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.category === 'subscription' ? 'bg-purple-500/30 text-purple-300' :
                        product.category === 'heavy' ? 'bg-red-500/30 text-red-300' :
                        product.category === 'moderate' ? 'bg-yellow-500/30 text-yellow-300' :
                        product.category === 'light' ? 'bg-green-500/30 text-green-300' :
                        'bg-blue-500/30 text-blue-300'
                      }`}>
                        {product.category}
                      </span>
                      <a
                        href="https://ebl.jewelpads.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition-colors text-sm inline-flex items-center"
                      >
                        Order Now
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Reign Premium Features</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-pink-500/20 border border-pink-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Nobel Prize Winning Graphene™ Technology</h3>
                    <p className="text-gray-300 mb-4">
                      Reign pads feature revolutionary Graphene™ technology - the Nobel Prize winning material that's 200 times stronger than steel and incredibly thin.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Ultra thin design with maximum strength</li>
                      <li>• Superior conductivity for moisture management</li>
                      <li>• Antibacterial properties for enhanced hygiene</li>
                      <li>• 10X more absorbent than traditional materials</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Air-Laid Design</h3>
                    <p className="text-gray-300">
                      Advanced air-laid design provides extra protection against undesired leakage 
                      while maintaining comfort and discretion.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Graphene™ Enhanced Benefits</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center">
                        <Shield className="h-5 w-5 text-blue-400 mr-2" />
                        Nobel Prize winning technology integration
                      </li>
                      <li className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Revolutionary moisture management system
                      </li>
                      <li className="flex items-center">
                        <Package className="h-5 w-5 text-green-400 mr-2" />
                        Ultra-thin yet incredibly strong construction
                      </li>
                      <li className="flex items-center">
                        <Shield className="h-5 w-5 text-purple-400 mr-2" />
                        Natural antibacterial properties
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Demonstration Videos</h3>
                    <p className="text-gray-300 mb-4">
                      Reign provides live demonstration videos showing:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Absorbency napkin demonstration (50 ML test)</li>
                      <li>• Absorbency cup demonstration (100 ML test)</li>
                      <li>• 99% dry performance even when pressed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SOLVY Ordering Tab */}
          {activeTab === 'ordering' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Order Reign Products with SOLVY</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">SOLVY Card Benefits</h3>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start">
                        <Crown className="h-5 w-5 text-pink-400 mr-3 mt-1" />
                        <div>
                          <strong className="text-white">Exclusive EBL Pricing:</strong> Special distributor rates for SOLVY cardholders
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                        <div>
                          <strong className="text-white">Cooperative Rewards Rewards:</strong> Earn blockchain rewards on every Reign purchase
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Package className="h-5 w-5 text-green-400 mr-3 mt-1" />
                        <div>
                          <strong className="text-white">Subscription Discounts:</strong> Additional savings on monthly subscriptions
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                        <div>
                          <strong className="text-white">Priority Access:</strong> First access to new Reign products
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">How to Order</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                        <span className="text-gray-300">Visit EBL location or call (929) 429-5994</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                        <span className="text-gray-300">Present your SOLVY card for special pricing</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                        <span className="text-gray-300">Choose your Reign products</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                        <span className="text-gray-300">Earn Cooperative Rewards rewards automatically</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">EBL Distribution Advantage</h3>
                    <p className="text-gray-300 mb-4">
                      As an authorized Reign distributor, EBL offers:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Direct access to full Reign product line</li>
                      <li>• Competitive distributor pricing</li>
                      <li>• Local inventory for immediate availability</li>
                      <li>• Personal consultation on product selection</li>
                      <li>• Bulk ordering options for salons</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact EBL</h3>
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        <strong className="text-white">Phone:</strong> (929) 429-5994
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Representative ID:</strong> 301272
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Status:</strong> Authorized Reign Distributor
                      </p>
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <button
                        onClick={() => window.location.href = '/ebl-payment'}
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition-colors"
                      >
                        Visit EBL Services
                      </button>
                      <a
                        href="https://ebl.jewelpads.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors inline-flex items-center justify-center"
                      >
                        Order at ebl.jewelpads.com
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Inventory Intelligence Tab */}
          {activeTab === 'inventory' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Reign Product Intelligence</h2>
              
              <div className="mb-8">
                <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">SOLVY Data Intelligence for Reign Products</h3>
                  <p className="text-gray-300 mb-4">
                    Using SOLVY card purchasing data to optimize Reign product inventory and availability at EBL locations.
                  </p>
                  <div className="flex items-center text-green-400">
                    <Zap className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Powered by SOLVY Transaction Analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-pink-500/20 border border-pink-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Popular Reign Products</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monthly Subscription Bundle</span>
                        <span className="text-pink-400">↑ 45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Super Heavy Flow</span>
                        <span className="text-pink-400">↑ 32%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Panty Liners with Wings</span>
                        <span className="text-green-400">↑ 28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Heavy Flow</span>
                        <span className="text-yellow-400">→ 12%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Seasonal Patterns</h3>
                    <p className="text-gray-300 mb-4">
                      SOLVY data reveals seasonal preferences for Reign products:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Summer: Higher demand for panty liners</li>
                      <li>• Winter: Increased heavy flow product sales</li>
                      <li>• Back-to-school: Subscription bundle popularity</li>
                      <li>• Holiday season: Gift subscription increases</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Inventory Optimization</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Predict Reign product demand 30-60 days ahead</li>
                      <li>• Optimize EBL inventory levels</li>
                      <li>• Reduce stockouts of popular items</li>
                      <li>• Identify emerging product preferences</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">Customer Insights</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Subscription Preference:</span>
                        <span className="text-green-400">68%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Wings Preference:</span>
                        <span className="text-green-400">84%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Heavy Flow Demand:</span>
                        <span className="text-yellow-400">52%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customer Satisfaction:</span>
                        <span className="text-green-400">96%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Reign

