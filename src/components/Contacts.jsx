
import { useTheme } from '../context/ThemeContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function Contacts() {
    const { theme } = useTheme();

    return (
        <footer className={`w-full py-8 ${theme === 'dark' ? 'bg-[#000300]' : 'bg-white'}`}>
            <div className="max-w-[800px] mx-auto px-4">
                <div className="flex flex-col items-center space-y-6">
                    <h2 className={`text-2xl font-normal tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Get in Touch
                    </h2>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/meethp20   "
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                        >
                            <BsGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/meeth-patel-b35b652b2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                        >
                            <BsLinkedin size={24} />
                        </a>
                    </div>
                    <a
                        href="mailto:meeth2036@gmail.com"
                        className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                    >
                        <MdEmail size={24} />
                        <span>meeth2036@gmail.com</span>
                    </a>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        © 2025 Meeth Patel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Contacts; 