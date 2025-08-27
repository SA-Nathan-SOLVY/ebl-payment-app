import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  CreditCard, 
  ArrowRightLeft, 
  DollarSign, 
  Users, 
  Shield,
  CheckCircle,
  Star,
  MapPin,
  Banknote,
  TrendingDown,
  Calendar,
  Target,
  Lightbulb,
  Wallet,
  RefreshCw
} from 'lucide-react'
import { CurrencyConverter } from './CurrencyConverter'
import { MemberTransfer } from './MemberTransfer'

const Remittance: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('nigeria')
  const [remittanceAmount, setRemittanceAmount] = useState('500')

  // Enhanced country data with more comprehensive information
  const countries = {
    // BRICS Full Members (11 countries as of 2025)
    brazil: { 
      name: 'Brazil', 
      flag: '🇧🇷', 
      volume: '$2.8B', 
      fee: '12%', 
      gdpPercent: '0.15%',
      currency: 'BRL',
      group: 'BRICS Members',
      description: 'BRICS founding member, largest Latin American economy'
    },
    russia: { 
      name: 'Russia', 
      flag: '🇷🇺', 
      volume: '$1.2B', 
      fee: '15%', 
      gdpPercent: '0.07%',
      currency: 'RUB',
      group: 'BRICS Members',
      description: 'BRICS founding member, energy and commodities powerhouse'
    },
    india: { 
      name: 'India', 
      flag: '🇮🇳', 
      volume: '$125B', 
      fee: '8%', 
      gdpPercent: '3.2%',
      currency: 'INR',
      group: 'BRICS Members',
      description: 'BRICS founding member, fastest growing major economy'
    },
    china: { 
      name: 'China', 
      flag: '🇨🇳', 
      volume: '$18.1B', 
      fee: '10%', 
      gdpPercent: '0.1%',
      currency: 'CNY',
      group: 'BRICS Members',
      description: 'BRICS founding member, world\'s second largest economy'
    },
    south_africa: { 
      name: 'South Africa', 
      flag: '🇿🇦', 
      volume: '$1.1B', 
      fee: '22%', 
      gdpPercent: '0.27%',
      currency: 'ZAR',
      group: 'BRICS Members',
      description: 'BRICS founding member (joined 2011), African economic hub'
    },
    saudi_arabia: { 
      name: 'Saudi Arabia', 
      flag: '🇸🇦', 
      volume: '$36.1B', 
      fee: '14%', 
      gdpPercent: '4.8%',
      currency: 'SAR',
      group: 'BRICS Members',
      description: 'BRICS new member (2024), Gulf economic powerhouse'
    },
    egypt: { 
      name: 'Egypt', 
      flag: '🇪🇬', 
      volume: '$31.9B', 
      fee: '20%', 
      gdpPercent: '6.2%',
      currency: 'EGP',
      group: 'BRICS Members',
      description: 'BRICS new member (2024), North African gateway'
    },
    uae: { 
      name: 'UAE', 
      flag: '🇦🇪', 
      volume: '$18.8B', 
      fee: '12%', 
      gdpPercent: '3.9%',
      currency: 'AED',
      group: 'BRICS Members',
      description: 'BRICS new member (2024), Middle East financial hub'
    },
    ethiopia: { 
      name: 'Ethiopia', 
      flag: '🇪🇹', 
      volume: '$5.4B', 
      fee: '15%', 
      gdpPercent: '4.1%',
      currency: 'ETB',
      group: 'BRICS Members',
      description: 'BRICS new member (2024), East African economic leader'
    },
    indonesia: { 
      name: 'Indonesia', 
      flag: '🇮🇩', 
      volume: '$8.9B', 
      fee: '13%', 
      gdpPercent: '0.65%',
      currency: 'IDR',
      group: 'BRICS Members',
      description: 'BRICS new member (2024), Southeast Asian giant'
    },
    iran: { 
      name: 'Iran', 
      flag: '🇮🇷', 
      volume: '$1.8B', 
      fee: '18%', 
      gdpPercent: '0.9%',
      currency: 'IRR',
      group: 'BRICS Members',
      description: 'BRICS new member (2024), Persian Gulf regional power'
    },

    // BRICS Partner Countries (10 countries as of 2025)
    belarus: { 
      name: 'Belarus', 
      flag: '🇧🇾', 
      volume: '$0.8B', 
      fee: '16%', 
      currency: 'BYN',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Eastern European economy'
    },
    bolivia: { 
      name: 'Bolivia', 
      flag: '🇧🇴', 
      volume: '$1.3B', 
      fee: '14%', 
      currency: 'BOB',
      group: 'BRICS Partners',
      description: 'BRICS partner country, South American resource-rich nation'
    },
    cuba: { 
      name: 'Cuba', 
      flag: '🇨🇺', 
      volume: '$3.7B', 
      fee: '25%', 
      currency: 'CUP',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Caribbean island nation'
    },
    kazakhstan: { 
      name: 'Kazakhstan', 
      flag: '🇰🇿', 
      volume: '$2.1B', 
      fee: '12%', 
      currency: 'KZT',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Central Asian energy producer'
    },
    malaysia: { 
      name: 'Malaysia', 
      flag: '🇲🇾', 
      volume: '$1.9B', 
      fee: '11%', 
      currency: 'MYR',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Southeast Asian trading hub'
    },
    nigeria: { 
      name: 'Nigeria', 
      flag: '🇳🇬', 
      volume: '$25.1B', 
      fee: '18%', 
      currency: 'NGN',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Africa\'s largest economy'
    },
    thailand: { 
      name: 'Thailand', 
      flag: '🇹🇭', 
      volume: '$6.2B', 
      fee: '13%', 
      currency: 'THB',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Southeast Asian manufacturing hub'
    },
    uganda: { 
      name: 'Uganda', 
      flag: '🇺🇬', 
      volume: '$1.4B', 
      fee: '20%', 
      currency: 'UGX',
      group: 'BRICS Partners',
      description: 'BRICS partner country, East African emerging market'
    },
    uzbekistan: { 
      name: 'Uzbekistan', 
      flag: '🇺🇿', 
      volume: '$8.1B', 
      fee: '15%', 
      currency: 'UZS',
      group: 'BRICS Partners',
      description: 'BRICS partner country, Central Asian cotton producer'
    },
    vietnam: { 
      name: 'Vietnam', 
      flag: '🇻🇳', 
      volume: '$17.2B', 
      fee: '12%', 
      currency: 'VND',
      group: 'BRICS Partners',
      description: 'BRICS partner country (2025), dynamic Asian economy'
    },

    // Top US Remittance Markets
    mexico: { 
      name: 'Mexico', 
      flag: '🇲🇽', 
      volume: '$61.0B', 
      fee: '8%', 
      currency: 'MXN',
      group: 'Top Markets',
      description: 'Largest US remittance destination'
    },
    guatemala: { 
      name: 'Guatemala', 
      flag: '🇬🇹', 
      volume: '$19.3B', 
      fee: '10%', 
      currency: 'GTQ',
      group: 'Top Markets',
      description: 'Central American leader'
    },
    philippines: { 
      name: 'Philippines', 
      flag: '🇵🇭', 
      volume: '$38.2B', 
      fee: '12%', 
      currency: 'PHP',
      group: 'Top Markets',
      description: 'Major Asian remittance market'
    },
    el_salvador: { 
      name: 'El Salvador', 
      flag: '🇸🇻', 
      volume: '$8.1B', 
      fee: '9%', 
      currency: 'USD',
      group: 'Top Markets',
      description: 'Bitcoin adoption leader'
    },
    honduras: { 
      name: 'Honduras', 
      flag: '🇭🇳', 
      volume: '$6.2B', 
      fee: '10%', 
      currency: 'HNL',
      group: 'Top Markets',
      description: 'Central American market'
    },
    dominican_republic: { 
      name: 'Dominican Republic', 
      flag: '🇩🇴', 
      volume: '$10.4B', 
      fee: '9%', 
      currency: 'DOP',
      group: 'Top Markets',
      description: 'Caribbean economic hub'
    },
    jamaica: { 
      name: 'Jamaica', 
      flag: '🇯🇲', 
      volume: '$3.8B', 
      fee: '12%', 
      currency: 'JMD',
      group: 'Top Markets',
      description: 'Caribbean island nation'
    },

    // African Diaspora Priority Markets
    ghana: { 
      name: 'Ghana', 
      flag: '🇬🇭', 
      volume: '$4.7B', 
      fee: '20%', 
      currency: 'GHS',
      group: 'African Diaspora',
      description: 'West African gold coast'
    },
    kenya: { 
      name: 'Kenya', 
      flag: '🇰🇪', 
      volume: '$4.2B', 
      fee: '18%', 
      currency: 'KES',
      group: 'African Diaspora',
      description: 'East African tech hub'
    },
    morocco: { 
      name: 'Morocco', 
      flag: '🇲🇦', 
      volume: '$10.9B', 
      fee: '18%', 
      currency: 'MAD',
      group: 'African Diaspora',
      description: 'North African gateway'
    },
    senegal: { 
      name: 'Senegal', 
      flag: '🇸🇳', 
      volume: '$2.8B', 
      fee: '16%', 
      currency: 'XOF',
      group: 'African Diaspora',
      description: 'West African cultural center'
    },
    cameroon: { 
      name: 'Cameroon', 
      flag: '🇨🇲', 
      volume: '$1.8B', 
      fee: '22%', 
      currency: 'XAF',
      group: 'African Diaspora',
      description: 'Central African hub'
    },

    // Potential BRICS Partners
    algeria: { 
      name: 'Algeria', 
      flag: '🇩🇿', 
      volume: '$2.1B', 
      fee: '16%', 
      currency: 'DZD',
      group: 'Potential Partners',
      description: 'North African energy producer'
    },
    argentina: { 
      name: 'Argentina', 
      flag: '🇦🇷', 
      volume: '$1.8B', 
      fee: '14%', 
      currency: 'ARS',
      group: 'Potential Partners',
      description: 'South American agricultural powerhouse'
    },
    bangladesh: { 
      name: 'Bangladesh', 
      flag: '🇧🇩', 
      volume: '$21.9B', 
      fee: '9%', 
      currency: 'BDT',
      group: 'Potential Partners',
      description: 'Major textile exporter'
    },
    turkey: { 
      name: 'Turkey', 
      flag: '🇹🇷', 
      volume: '$4.1B', 
      fee: '12%', 
      currency: 'TRY',
      group: 'Potential Partners',
      description: 'Bridge between Europe and Asia'
    },
    venezuela: { 
      name: 'Venezuela', 
      flag: '🇻🇪', 
      volume: '$0.8B', 
      fee: '15%', 
      currency: 'VES',
      group: 'Potential Partners',
      description: 'South American oil producer'
    }
  }

  const developmentPhases = [
    {
      id: 'foundation',
      title: 'Phase 1: Foundation',
      period: '2025 Q1-Q2',
      status: 'In Progress',
      statusColor: 'bg-green-500',
      items: [
        'EBL Services integration (Current)',
        'SOLVY Card deployment',
        'DECIDEY NGO education platform',
        'SOVEREIGNITITY™ LIFE PROGRAM wealth-building strategies'
      ]
    },
    {
      id: 'regional',
      title: 'Phase 2: Regional Expansion',
      period: '2025 Q3-Q4',
      status: 'Planned',
      statusColor: 'bg-blue-500',
      items: [
        'African Diaspora remittance pilot',
        'Nigeria, Ghana, Kenya partnerships',
        'Family card network testing',
        'Cooperative economics education'
      ]
    },
    {
      id: 'brics',
      title: 'Phase 3: Global Integration',
      period: '2026 Q1-Q2',
      status: 'Vision',
      statusColor: 'bg-purple-500',
      items: [
        'Web3 infrastructure deployment',
        'Ethereum and Polygon network integration',
        'International partnership development',
        'Cross-border payment infrastructure'
      ]
    },
    {
      id: 'global',
      title: 'Phase 4: Global Network',
      period: '2026 Q3+',
      status: 'Vision',
      statusColor: 'bg-orange-500',
      items: [
        'Top remittance market integration',
        'Multi-currency support expansion',
        'Global cooperative network',
        'Economic sovereignty achievement'
      ]
    }
  ]

  const countryGroups = {
    'BRICS Members': Object.entries(countries).filter(([_, country]) => country.group === 'BRICS Members'),
    'BRICS Partners': Object.entries(countries).filter(([_, country]) => country.group === 'BRICS Partners'),
    'Top Markets': Object.entries(countries).filter(([_, country]) => country.group === 'Top Markets'),
    'African Diaspora': Object.entries(countries).filter(([_, country]) => country.group === 'African Diaspora'),
    'Potential Partners': Object.entries(countries).filter(([_, country]) => country.group === 'Potential Partners')
  }

  return (
    <div className="min-h-screen py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-12 w-12 text-purple-400 mr-4" />
            <h1 className="text-5xl font-bold text-white">Global Remittance Vision & Roadmap</h1>
            <ArrowRightLeft className="h-12 w-12 text-blue-400 ml-4" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building the future of diaspora financial sovereignty through strategic partnership goals
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30 mb-12"
        >
          <div className="flex items-center mb-6">
            <Lightbulb className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Future Vision: Self-Determined Economic Liberation</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            While HR 40 represents important progress, the African Diaspora cannot wait for institutional action. 
            SOLVY's roadmap envisions <strong className="text-purple-300">zero-fee family remittances</strong> connecting 
            diaspora communities globally through our <strong className="text-blue-300">Ethereum-ready and Polygon-integrated</strong> 
            Web3 infrastructure. This comprehensive network will enable <strong className="text-green-300">immediate economic sovereignty</strong> through 
            cooperative wealth-building, supporting all communities exploited in the post-WW2 American empire.
          </p>
        </motion.div>

        {/* Development Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <Calendar className="h-8 w-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Development Roadmap</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${phase.statusColor}`}>
                    {phase.status}
                  </div>
                  <h4 className="font-bold text-white text-lg mt-2">{phase.title}</h4>
                  <p className="text-sm text-gray-400">{phase.period}</p>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Target className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            Data Legend
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-gray-300">
              <strong className="text-blue-300">Volume:</strong> Annual remittance inflows (USD)
            </div>
            <div className="text-gray-300">
              <strong className="text-purple-300">GDP %:</strong> Remittances as percentage of GDP
            </div>
            <div className="text-gray-300">
              <strong className="text-red-300">Traditional Fees:</strong> Current average transfer costs
            </div>
          </div>
        </motion.div>

        {/* Comprehensive Country Network */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Comprehensive Global Network Vision
          </h2>
          
          {Object.entries(countryGroups).map(([groupName, groupCountries], groupIndex) => (
            <div key={groupName} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className={`w-4 h-4 rounded-full mr-3 ${
                  groupName === 'BRICS Members' ? 'bg-yellow-500' :
                  groupName === 'BRICS Partners' ? 'bg-green-500' :
                  groupName === 'Top Markets' ? 'bg-blue-500' :
                  groupName === 'African Diaspora' ? 'bg-purple-500' :
                  'bg-orange-500'
                }`}></div>
                {groupName}
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {groupCountries.map(([key, country]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + groupIndex * 0.1 }}
                    className={`backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 cursor-pointer ${
                      groupName === 'BRICS Members' ? 'bg-yellow-900/10 border-yellow-500/20 hover:border-yellow-500/40' :
                      groupName === 'BRICS Partners' ? 'bg-green-900/10 border-green-500/20 hover:border-green-500/40' :
                      groupName === 'Top Markets' ? 'bg-blue-900/10 border-blue-500/20 hover:border-blue-500/40' :
                      groupName === 'African Diaspora' ? 'bg-purple-900/10 border-purple-500/20 hover:border-purple-500/40' :
                      'bg-orange-900/10 border-orange-500/20 hover:border-orange-500/40'
                    }`}
                    onClick={() => setSelectedCountry(key)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{country.flag}</div>
                      <div className="font-medium text-white text-sm">{country.name}</div>
                      <div className="text-xs text-gray-400">Volume: {country.volume}</div>
                      <div className={`text-xs font-medium ${
                        groupName === 'BRICS Members' ? 'text-yellow-300' :
                        groupName === 'BRICS Partners' ? 'text-green-300' :
                        groupName === 'Top Markets' ? 'text-blue-300' :
                        groupName === 'African Diaspora' ? 'text-purple-300' :
                        'text-orange-300'
                      }`}>GDP: {country.gdpPercent || 'N/A'}</div>
                      <div className="text-xs text-gray-500 mt-1">{country.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cost Savings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Calculator */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <ArrowRightLeft className="h-6 w-6 mr-2 text-purple-400" />
              Future Savings Calculator
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Send Amount (USD)
                </label>
                <input
                  type="number"
                  value={remittanceAmount}
                  onChange={(e) => setRemittanceAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Destination Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {Object.entries(countries).map(([key, country]) => (
                    <option key={key} value={key} className="bg-gray-800">
                      {country.flag} {country.name} ({country.group})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Savings Display */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <TrendingDown className="h-6 w-6 mr-2 text-green-400" />
              Projected Savings
            </h3>

            {remittanceAmount && selectedCountry && countries[selectedCountry as keyof typeof countries] && (
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-red-300 mb-2">Traditional Remittance</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Send Amount:</span>
                      <span className="text-white">${remittanceAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Fees ({countries[selectedCountry as keyof typeof countries]?.fee}):</span>
                      <span className="text-red-300">-${(parseFloat(remittanceAmount) * parseFloat(countries[selectedCountry as keyof typeof countries]?.fee.replace('%', '') || '0') / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-400">Recipient Gets:</span>
                      <span className="text-white">${(parseFloat(remittanceAmount) * (1 - parseFloat(countries[selectedCountry as keyof typeof countries]?.fee.replace('%', '') || '0') / 100)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-300 mb-2">SOLVY Family Network (Future)</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Send Amount:</span>
                      <span className="text-white">${remittanceAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Fees:</span>
                      <span className="text-green-300">$0.00 (Family Cards)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-400">Recipient Gets:</span>
                      <span className="text-white">${remittanceAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-purple-300 mb-2">Projected Annual Savings</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      ${((parseFloat(remittanceAmount) * parseFloat(countries[selectedCountry as keyof typeof countries]?.fee.replace('%', '') || '0') / 100) * 12).toFixed(2)}
                    </div>
                    <div className="text-sm text-purple-300">Per year (monthly transfers)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Vision Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">Economic Sovereignty</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Self-determined financial independence
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Bypass traditional banking exploitation
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Data sovereignty and privacy
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">Diaspora Unity</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Connect families across continents
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Strengthen cultural and economic bonds
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Build cooperative wealth networks
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center mb-4">
              <Globe className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white">Global Impact</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Deploy Web3 infrastructure globally
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Advance blockchain-based financial systems
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Create decentralized economic networks
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Enhanced Currency Converter and Member Transfer */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/30"
          >
            <div className="flex items-center gap-2 mb-6">
              <ArrowRightLeft className="h-8 w-8 text-purple-400" />
              <Globe className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">💱 Currency Converter</h2>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Access real-time exchange rates for BRICS nations, partner countries, and major global markets. Make informed decisions about your international transfers with our comprehensive currency conversion tools.
            </p>
            <CurrencyConverter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-gradient-to-br from-green-900/20 to-purple-900/20 rounded-xl p-8 border border-green-500/30"
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-8 w-8 text-green-400" />
              <Shield className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Member to Member Transfer</h2>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Experience seamless, borderless transfers between SOLVY members. Our secure platform enables instant transactions with:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <Wallet className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Zero transfer fees between members</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">End-to-end encrypted transactions</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Support for all BRICS+ currencies</span>
              </li>
            </ul>
            <MemberTransfer />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center mt-16 mb-8"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Vision of Financial Sovereignty</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              This comprehensive roadmap represents our commitment to building a global network that serves the African Diaspora 
              and all communities seeking economic liberation. Starting with EBL Services and expanding through our Ethereum-ready, 
              Polygon-integrated Web3 infrastructure, we're creating the foundation for true financial independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                Start with SOLVY Card
              </button>
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Learn About DECIDEY NGO
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Remittance

