import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  CreditCard, 
  Shield, 
  Coins, 
  TrendingUp, 
  Users, 
  BookOpen,
  BarChart3,
  Crown,
  ShoppingBag,
  User,
  LogOut
} from 'lucide-react'
import solvyFullLogo from '../assets/solvy-full-logo.png'

interface NavigationProps {
  currentUser: any
  setCurrentUser: (user: any) => void
}

const Navigation: React.FC<NavigationProps> = ({ currentUser, setCurrentUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('solvy_token')
    localStorage.removeItem('solvy_user')
    setCurrentUser(null)
    setIsOpen(false)
  }

  const navItems = [
    { name: 'EBL Payment', href: '/ebl', icon: CreditCard, description: 'Beauty salon payments' },
    { name: 'SOLVY Card', href: '/card', icon: CreditCard, description: 'Manage your card' },
    { name: 'SOVEREIGNITITY™', href: '/sovereignitity', icon: Shield, description: 'Self-sovereign identity' },
    { name: 'GUAPCOIN', href: '/guapcoin', icon: Coins, description: 'Blockchain network' },
    { name: 'AES Investment', href: '/aes', icon: TrendingUp, description: 'African development' },
    { name: 'Education', href: '/education', icon: BookOpen, description: 'Learn & grow' },
    { name: 'DECIDEY NGO', href: '/decidey', icon: Users, description: 'Digital rights' },
    { name: 'MAN Network', href: '/man', icon: Shield, description: 'Security & audit' },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, description: 'Data insights' },
    { name: 'Reign', href: '/reign', icon: Crown, description: 'Premium products' },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag, description: 'Services & goods' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={solvyFullLogo} 
                alt="SOLVY - Solutions Valued You" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="h-4 w-4 inline mr-1" />
                {item.name}
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200">
                More
                <Menu className="h-4 w-4 inline ml-1" />
              </button>
              
              <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {navItems.slice(6).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-4 py-2 text-sm transition-colors ${
                        isActive(item.href)
                          ? 'bg-purple-600/20 text-purple-300'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:block">{currentUser.username}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-white/10">
                      <div className="text-sm font-medium text-white">{currentUser.username}</div>
                      <div className="text-xs text-gray-400">{currentUser.email}</div>
                    </div>
                    <Link
                      to="/card"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <CreditCard className="h-4 w-4 mr-3" />
                      SOLVY Card
                    </Link>
                    <Link
                      to="/sovereignitity"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Shield className="h-4 w-4 mr-3" />
                      SOVEREIGNITITY™
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/sovereignitity"
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/sovereignitity"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-500 hover:to-blue-500 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-purple-600/20 text-purple-300'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="h-4 w-4 mr-3" />
                <div>
                  <div>{item.name}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </div>
              </Link>
            ))}
            
            {!currentUser && (
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/sovereignitity"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-2 text-center text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-500 hover:to-blue-500 transition-all duration-200"
                >
                  Start Your SOVEREIGNITITY™ Journey
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation

