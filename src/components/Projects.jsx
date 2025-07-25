
import { useTheme } from '../context/ThemeContext'

function Projects() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full font-mono">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8`}>My Projects</h1>
            <div className={`grid md:grid-cols-2 gap-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                 <a href="https://github.com/meethp20/docuchat-app" target='_blank' className={`block p-6 ${theme === 'dark' ? 'bg-[#120B1D] border-purple-900' : 'bg-gray-100 border-gray-200'} border rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Docuchat-app</h5>
                    <p className={`font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
  DocuChat is a modern web application that combines PDF document processing with AI-powered chat capabilities.</p>
                    <div className="mt-4 flex-wrap gap-2">
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Next.js</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Supabase</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Typescript</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Gemini Api</span>
                    </div>
                </a>
                  <a href="https://github.com/meethp20/Crypto-Crash" target='_blank' className={`block p-6 ${theme === 'dark' ? 'bg-[#120B1D] border-purple-900' : 'bg-gray-100 border-gray-200'} border rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Crypto-Crash</h5>
                    <p className={`font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>A real-time multiplayer crypto crash game with WebSocket integration and cryptocurrency conversions</p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">React</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">MongoDb</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Websockets</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Nodejs</span>
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Express</span>
                     
                    </div>
                </a>
                <a href="https://image-gallery-eosin-seven.vercel.app/" target='_blank' className={`block p-6 ${theme === 'dark' ? 'bg-[#120B1D] border-purple-900' : 'bg-gray-100 border-gray-200'} border rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Image gallery</h5>
                    <p className={`font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>takes image and displays it all in a grid</p>
                    <div className="mt-4 flex-wrap gap-2">
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">React</span>
                    </div>
                </a>

                <a href="https://github-profiles-blue.vercel.app/" target='_blank' className={`block p-6 ${theme === 'dark' ? 'bg-[#120B1D] border-purple-900' : 'bg-gray-100 border-gray-200'} border rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>github profile finder</h5>
                    <p className={`font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>finds github profile of a user</p>
                    <div className="">
                        <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Javasript</span>
                    </div>
                </a>

                <a href="#" className={`block p-6 ${theme === 'dark' ? 'bg-[#120B1D] border-purple-900' : 'bg-gray-100 border-gray-200'} border rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Blog App</h5>
                    <p className={`font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>(in development)</p>
                    <div className="mt-4 flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">React</span>
                      <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Tailwind</span>
                      <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Appwrite</span>
                      <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Redux</span>
                      <span className="px-3 py-1 text-sm bg-purple-900 text-purple-200 rounded whitespace-nowrap">Bun</span>
                    </div>
                </a>

                <a href="https://todo-list-ruddy-alpha-51.vercel.app/" className={`block p-6 ${theme === 'dark' ? 'bg-[#120B1D] border-purple-900' : 'bg-gray-100 border-gray-200'} border rounded-lg shadow hover:bg-opacity-80 hover:scale-105 transition-all duration-300`}>
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>todo list</h5>
                    <p className={`font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>a simple todo list i made for fun just using js </p>
                    <div className="mt-4 flex-wrap gap-2">
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects
