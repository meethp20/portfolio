import React from 'react'
import { useTheme } from '../context/ThemeContext'

function Hero() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full">
      <main className="container mx-auto px-6 ">
        <section className="my-8 tracking-wide">
          <h2 className={`text-4xl tracking-tighter font-sangeist ${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}>about me</h2>
          <p className={`mt-4 font-sangeist tracking-wide text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
            I'm a second-year Computer Science graduate student passionate about web development and <span className={`font-bold  ${theme ==='dark'?'text-gray-200' : 'text-gray-800'}`}>blockchain</span> technology. 
            Focused on learning how to craft products with{" "}
            <span className={`font-bold  ${theme ==='dark'?'text-gray-200' : 'text-gray-800'}`}>exceptional performance</span> and{" "}
           <span className={`font-bold  ${theme ==='dark'?'text-gray-200' : 'text-gray-800'}`}>usability</span>
            {" "}. My goal is to create products that make our lifes easier. 
          </p>
          <p className={`mt-4 font-sangeist tracking-wide text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Currently exploring the exciting world of  <span className={`font-bold  ${theme ==='dark'?'text-gray-200' : 'text-gray-800'}`}>Web3</span> and <span className={`font-bold  ${theme ==='dark'?'text-gray-200' : 'text-gray-800'}`}>blockchain</span> development on the side, combining my CS background with cutting-edge decentralized technologies.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Hero 