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
  LogOut,
  ChevronDown,
  Building2,
  Lock
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

  const isActive = (path: string) => location.pathname === path

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        isActive(to)
          ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {label}
    </Link>
  )

  const DropdownLink = ({ to, icon, label, description }: { to: string; icon: string; label: string; description: string }) => (
    <Link
      to={to}
      className={`flex items-center px-4 py-2 text-sm transition-colors ${
        isActive(to)
          ? 'bg-purple-600/20 text-purple-300'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      <span className="mr-3 text-base">{icon}</span>
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-xs text-gray-400">{description}</div>
      </div>
    </Link>
  )

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
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" label="Home" />
            <NavLink to="/solvy-card" label="SOVEREIGNITITY™ CARD" />
            <NavLink to="/ebl-payment" label="EBL Services" />
            <NavLink to="/sovereignitity" label="SOVEREIGNITITY™" />
            <NavLink to="/remittance" label="Global Remittance" />
            <NavLink to="/decidey" label="DECIDEY NGO" />
            
            {/* Financial Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Financial
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <DropdownLink to="/moli" icon="🛡️" label="SOVEREIGNITITY™ LIFE" description="Membership owned life insurance" />
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <DropdownLink to="/reign" icon="🌸" label="Reign" description="Premium products" />
                  <DropdownLink to="/marketplace" icon="🛍️" label="Marketplace" description="Partner network" />
                </div>
              </div>
            </div>

            {/* Platform Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Platform
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <DropdownLink to="/man" icon="🔒" label="MAN Network" description="Security & audit" />
                  <DropdownLink to="/analytics" icon="📊" label="Analytics" description="Data insights" />
                  <DropdownLink to="/communities" icon="👥" label="Communities" description="Who we serve" />
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
                      to="/solvy-card"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <CreditCard className="h-4 w-4 mr-3" />
                      SOVEREIGNITITY™ CARD
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
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
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
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Home</Link>
            <Link to="/solvy-card" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">SOVEREIGNITITY™ CARD</Link>
            <Link to="/ebl-payment" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">EBL Services</Link>
            <Link to="/sovereignitity" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">SOVEREIGNITITY™</Link>
            <Link to="/remittance" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Global Remittance</Link>
            <Link to="/decidey" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">DECIDEY NGO</Link>
            <Link to="/moli" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">SOVEREIGNITITY™ LIFE</Link>
            <Link to="/reign" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Reign</Link>
            <Link to="/marketplace" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Marketplace</Link>
            <Link to="/man" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">MAN Network</Link>
            <Link to="/analytics" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Analytics</Link>
            <Link to="/communities" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-white">Communities</Link>
            
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

