import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import EBLPayment from './components/EBLPayment'
import SolvyCard from './components/SolvyCard'
import Education from './components/Education'
import DECIDEY from './components/DECIDEY'
import MAN from './components/MAN'
import Marketplace from './components/Marketplace'
import Analytics from './components/Analytics'
import Reign from './components/Reign'
import Communities from './components/Communities'
import SOVEREIGNITITYLifeProgram from './components/MOLI'
import SOVEREIGNITITY from './components/SOVEREIGNITITY'
import Remittance from './components/Remittance'
import { Toaster } from './components/ui/toaster'
import './App.css'

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  },
})

interface User {
  id: string
  username: string
  email: string
  isVerified: boolean
  solvyCardNumber?: string
  sovereignitityScore?: number
  guapcoinBalance?: number
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session
    const checkUserSession = async () => {
      try {
        const token = localStorage.getItem('solvy_token')
        if (token) {
          // Validate token and get user data
          // This would normally be an API call
          const userData = localStorage.getItem('solvy_user')
          if (userData) {
            setCurrentUser(JSON.parse(userData))
          }
        }
      } catch (error) {
        console.error('Error checking user session:', error)
        localStorage.removeItem('solvy_token')
        localStorage.removeItem('solvy_user')
      } finally {
        setIsLoading(false)
      }
    }

    checkUserSession()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading SOLVY Platform...</div>
      </div>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />
          
          <Routes>
            {/* Main SOLVY Platform */}
            <Route path="/" element={<Hero currentUser={currentUser} />} />
            
            {/* EBL Payment System - First Client */}
            <Route path="/ebl-payment" element={<EBLPayment currentUser={currentUser} />} />
            
            {/* SOLVY Card Management */}
            <Route path="/solvy-card" element={<SolvyCard currentUser={currentUser} />} />
            
            {/* SOVEREIGNITITY™ - Core Innovation */}
            <Route path="/sovereignitity" element={<SOVEREIGNITITY currentUser={currentUser} />} />
            
            {/* Global Remittance - BRICS/NDB Integration */}
            <Route path="/remittance" element={<Remittance />} />
            
            {/* SOVEREIGNITITY™ LIFE PROGRAM - Membership Owned Life Insurance */}
            <Route path="/moli" element={<SOVEREIGNITITYLifeProgram />} />
            
            {/* Platform Features */}
            <Route path="/education" element={<Education />} />
            <Route path="/decidey" element={<DECIDEY />} />
            <Route path="/man" element={<MAN />} />
            <Route path="/marketplace" element={<Marketplace currentUser={currentUser} />} />
            <Route path="/analytics" element={<Analytics currentUser={currentUser} />} />
            <Route path="/reign" element={<Reign currentUser={currentUser} />} />
            <Route path="/communities" element={<Communities />} />
            
            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App

