import React from 'react'
import { useTheme } from '../context/ThemeContext'

function Hero() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full">
      <main className="container mx-auto px-6 py-8">
        <section className="my-8">
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>about me</h2>
          <p className={`mt-4 font-serif italic text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a second-year Computer Science graduate student passionate about web development and <span className="font-['Space_Grotesk'] text-purple-400">blockchain</span> technology. 
            Focused on learning how to craft products with{" "}
            <span className="font-semibold">exceptional performance</span> and{" "}
            <span className="font-semibold">usability</span>
            {" "}. My goal is to create products that make our lifes easier. 
          </p>
          <p className={`mt-4 font-serif italic text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Currently exploring the exciting world of <span className="font-['Space_Grotesk'] text-purple-400">Web3</span> and <span className="font-['Space_Grotesk'] text-purple-400">blockchain</span> development on the side, combining my CS background with cutting-edge decentralized technologies.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Hero