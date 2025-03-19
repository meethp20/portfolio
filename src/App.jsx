import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Stacks from './components/Stacks'
import Contacts from './components/Contacts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen w-full flex flex-col ${theme === 'dark' ? 'bg-[#000300]' : 'bg-white'}`}>
      <div className="max-w-[800px] mx-auto w-full">
        <Navbar />
        <main className="pt-8 flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stacks" element={<Stacks />} />
          </Routes>
        </main>
      </div>
      <Contacts />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
