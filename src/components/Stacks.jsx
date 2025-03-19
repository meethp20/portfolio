import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiAppwrite } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { SiC } from 'react-icons/si';

function Stacks() {
    const { theme } = useTheme();

    const technologies = [
        { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-500' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
        { name: 'Firebase', icon: <SiFirebase />, color: 'text-orange-500' },
        { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
        { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-500' },
        { name: 'Java', icon: <DiJava />, color: 'text-red-500' },
        { name: 'C', icon: <SiC />, color: 'text-blue-500' },
        { name: 'Appwrite', icon: <SiAppwrite />, color: 'text-blue-500' }
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
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
                                <div className={`text-4xl mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
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