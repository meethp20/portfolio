import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs as SiNode,
    SiExpress,
    SiMongodb,
    SiPython,
    SiGit,
    SiGithub,
    SiVercel,
    SiBun,
    SiHtml5,
    SiCss3,
    SiFirebase,
    SiC,
    SiAppwrite
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

function Stacks() {
    const { theme } = useTheme();

    const technologies = [
        { name: 'JavaScript', icon: <SiJavascript size={40} className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-500" /> },
        { name: 'React', icon: <SiReact size={40} className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
        { name: 'Node.js', icon: <SiNode size={40} className="text-green-500" /> },
        { name: 'Express', icon: <SiExpress size={40} className={theme === 'dark' ? 'text-white' : 'text-black'} /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
        { name: 'Python', icon: <SiPython size={40} className="text-blue-500" /> },
        { name: 'Git', icon: <SiGit size={40} className="text-orange-500" /> },
        { name: 'GitHub', icon: <SiGithub size={40} className={theme === 'dark' ? 'text-white' : 'text-black'} /> },
        { name: 'Vercel', icon: <SiVercel size={40} className={theme === 'dark' ? 'text-white' : 'text-black'} /> },
        { name: 'Bun', icon: <SiBun size={40} className={theme === 'dark' ? 'text-white' : 'text-black'} /> },
        { name: 'HTML5', icon: <SiHtml5 size={40} className="text-orange-500" /> },
        { name: 'CSS3', icon: <SiCss3 size={40} className="text-blue-500" /> },
        { name: 'Firebase', icon: <SiFirebase size={40} className="text-orange-500" /> },
        { name: 'Appwrite', icon: <SiAppwrite size={40} className="text-blue-500" /> },
        { name: 'Java', icon: <DiJava size={40} className="text-red-500" /> },
        { name: 'C', icon: <SiC size={40} className="text-blue-500" /> }
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl font-mono mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className={`text-4xl tracking-tighter font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Tech Stack
                    </h1>
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        Technologies I work with
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className={`group p-6 rounded-lg border ${
                                theme === 'dark' 
                                    ? 'bg-[#120B1D] border-purple-900 hover:bg-[#1B1126]' 
                                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            } transition-all duration-300 transform hover:scale-105`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {tech.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p className="text-lg">
                        I'm always learning and exploring new technologies to stay up-to-date with the latest web development trends.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stacks;