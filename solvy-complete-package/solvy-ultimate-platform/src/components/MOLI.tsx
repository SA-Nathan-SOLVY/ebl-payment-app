import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Building, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Calculator,
  PiggyBank,
  Repeat,
  Star
} from 'lucide-react'

const SOVEREIGNITITYLifeProgram: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

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
            SOVEREIGNITITY™ LIFE PROGRAM
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Membership Owned Life Insurance</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Democratizing the wealth-building strategies that banks and corporations have used for decades. 
            Now available to SOLVY members through cooperative ownership and shared benefits.
          </p>
        </motion.div>

        {/* Real-World Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-500/30">
            <div className="flex items-center mb-6">
              <Star className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-green-300">Real-World IBC/BYOB Success</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Actual Results from One America Policy</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">Initial Investment:</span>
                    <span className="text-green-400 font-semibold">$8,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">Immediate Loan Value:</span>
                    <span className="text-green-400 font-semibold">$7,700</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span className="text-gray-300">After One Payment:</span>
                    <span className="text-green-400 font-semibold">$8,400</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                    <span className="text-gray-300">Growth in One Month:</span>
                    <span className="text-green-400 font-bold">$700 (+9.1%)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-300">The Power of PUA (Paid Up Additions)</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span><strong>Immediate Access:</strong> 96.25% of investment available as loan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span><strong>Compound Growth:</strong> Cash value increases with each payment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span><strong>Premium Recycling:</strong> Loan against your own money</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span><strong>Tax Advantages:</strong> Tax-free loans and growth</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    <strong>Policy Details:</strong> One America with Jason Sipple from Chris Naugle's group. 
                    Monthly premium: $315 with $685 PUA rider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-lg p-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'boli-vs-moli', label: 'BOLI vs SOVEREIGNITITY™ LIFE PROGRAM' },
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'benefits', label: 'Benefits' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold">What is SOVEREIGNITITY™ LIFE PROGRAM?</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    SOVEREIGNITITY™ LIFE PROGRAM (Membership Owned Life Insurance) democratizes the wealth-building strategies 
                    that banks and corporations have used through BOLI (Bank Owned Life Insurance) for decades.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      Cooperative ownership of life insurance policies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      Shared benefits from premium recycling
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      Tax-advantaged wealth building
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">SOLVY Integration</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    SOVEREIGNITITY™ LIFE PROGRAM integrates seamlessly with the SOLVY ecosystem, creating multiple 
                    wealth-building opportunities for members.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5" />
                      SOLVY Card automatic contributions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5" />
                      Rewards for policy participation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5" />
                      Cooperative decision-making
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'boli-vs-moli' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8">BOLI vs SOVEREIGNITITY™ LIFE PROGRAM: The Difference</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* BOLI */}
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 text-red-400 mr-3" />
                    <h4 className="text-xl font-semibold text-red-300">BOLI (Bank Owned Life Insurance)</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                      Banks own policies on their employees
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                      Employees get no benefit from cash value
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                      Banks profit from premium recycling
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                      Tax benefits go to the bank
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                      Employees have no control or ownership
                    </li>
                  </ul>
                </div>

                {/* SOVEREIGNITITY™ LIFE PROGRAM */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-green-400 mr-3" />
                    <h4 className="text-xl font-semibold text-green-300">SOVEREIGNITITY™ LIFE PROGRAM (Membership Owned Life Insurance)</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      Members collectively own policies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      Shared profits from cash value growth
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      Cooperative premium recycling benefits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      Tax advantages shared among members
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      Democratic control and transparency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'how-it-works' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8">How SOVEREIGNITITY™ LIFE PROGRAM Works: Premium Recycling Simplified</h3>
              
              {/* Nelson Nash Institute Principles */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/30 mb-8">
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Based on Nelson Nash Institute Teachings</h4>
                <p className="text-gray-300 mb-4">
                  The Infinite Banking Concept (IBC) and Be Your Own Bank (BYOB) strategies that we're implementing 
                  through SOVEREIGNITITY™ LIFE PROGRAM have been proven effective for decades. Here's how we simplify the process:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                    <h4 className="text-lg font-semibold">Premium Contributions</h4>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Members contribute premiums through SOLVY Card transactions and direct payments.
                  </p>
                  <div className="text-sm text-blue-300">
                    Example: $315/month base + $685 PUA rider = $1,000 total premium
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                    <h4 className="text-lg font-semibold">Cash Value Growth</h4>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Premiums build cash value that grows tax-free and becomes available for loans.
                  </p>
                  <div className="text-sm text-purple-300">
                    Example: $8,000 investment → $8,400 available in one month
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                    <h4 className="text-lg font-semibold">Premium Recycling</h4>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Members borrow against cash value to pay future premiums, creating a self-sustaining cycle.
                  </p>
                  <div className="text-sm text-green-300">
                    Loan rate: 5.37% vs. cash value growth: 6%+ = Net positive return
                  </div>
                </div>
              </div>

              {/* Real Example */}
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-500/30">
                <h4 className="text-xl font-semibold mb-4 text-green-300">Real-World Example: The Power of PUA</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-blue-300">Month 1 Results:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Initial investment: $8,000</li>
                      <li>• Immediate loan value: $7,700 (96.25%)</li>
                      <li>• Available for use: $7,700</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-purple-300">Month 2 Results:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• After one payment: $8,400 available</li>
                      <li>• Growth: $700 in one month</li>
                      <li>• Effective return: 9.1% monthly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8">SOVEREIGNITITY™ LIFE PROGRAM Benefits for SOLVY Members</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Financial Benefits */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-green-400 mr-3" />
                    <h4 className="text-lg font-semibold">Financial Benefits</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Tax-free cash value growth</li>
                    <li>• Tax-free policy loans</li>
                    <li>• Guaranteed minimum returns</li>
                    <li>• Dividend participation</li>
                    <li>• No market risk</li>
                  </ul>
                </div>

                {/* Liquidity Benefits */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <PiggyBank className="h-8 w-8 text-blue-400 mr-3" />
                    <h4 className="text-lg font-semibold">Liquidity Benefits</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Immediate access to cash value</li>
                    <li>• No credit checks for loans</li>
                    <li>• Flexible repayment terms</li>
                    <li>• Continue earning while borrowed</li>
                    <li>• Emergency fund alternative</li>
                  </ul>
                </div>

                {/* Cooperative Benefits */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-400 mr-3" />
                    <h4 className="text-lg font-semibold">Cooperative Benefits</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Shared ownership and control</li>
                    <li>• Collective bargaining power</li>
                    <li>• Transparent operations</li>
                    <li>• Democratic decision-making</li>
                    <li>• Community wealth building</li>
                  </ul>
                </div>

                {/* SOLVY Integration */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Repeat className="h-8 w-8 text-yellow-400 mr-3" />
                    <h4 className="text-lg font-semibold">SOLVY Integration</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Automatic premium contributions</li>
                    <li>• SOLVY Card rewards integration</li>
                    <li>• SOVEREIGNITITY™ score benefits</li>
                    <li>• EBL transaction rewards</li>
                    <li>• Cooperative governance participation</li>
                  </ul>
                </div>

                {/* Legacy Benefits */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-red-400 mr-3" />
                    <h4 className="text-lg font-semibold">Legacy Benefits</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Tax-free death benefits</li>
                    <li>• Wealth transfer to heirs</li>
                    <li>• Estate planning advantages</li>
                    <li>• Creditor protection</li>
                    <li>• Generational wealth building</li>
                  </ul>
                </div>

                {/* Education Benefits */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Calculator className="h-8 w-8 text-cyan-400 mr-3" />
                    <h4 className="text-lg font-semibold">Education Benefits</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Nelson Nash Institute principles</li>
                    <li>• IBC/BYOB strategy training</li>
                    <li>• Premium recycling education</li>
                    <li>• Wealth-building workshops</li>
                    <li>• Cooperative economics learning</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Start Building Wealth with SOVEREIGNITITY™ LIFE PROGRAM?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the SOLVY cooperative and start benefiting from the same wealth-building strategies 
            that banks and corporations have used for decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
              Learn More About SOVEREIGNITITY™ LIFE PROGRAM
            </button>
            <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Contact Our Advisors
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SOVEREIGNITITYLifeProgram

