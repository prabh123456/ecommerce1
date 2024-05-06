import React, { useContext } from 'react';
import myContext from '../../context/data/Mycontext';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <footer className={`py-12 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="md:w-1/4 mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">E-Bharat</h3>
                    <p className="text-sm">123 Main Street</p>
                    <p className="text-sm">City, State ZIP</p>
                    <p className="text-sm">Phone: 123-456-7890</p>
                    <p className="text-sm">Email: info@example.com</p>
                </div>
                <div className="md:w-1/4 mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <ul className="text-sm">
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                        <li>Kids' Clothing</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className="md:w-1/4 mb-8 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                    <ul className="text-sm">
                        <li><a href="#" className={`${mode === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>About Us</a></li>
                        <li><a href="#" className={`${mode === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>Contact Us</a></li>
                        <li><a href="#" className={`${mode === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>Privacy Policy</a></li>
                        <li><a href="#" className={`${mode === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`}>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="md:w-1/4">
                    <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="text-3xl" /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="text-3xl" /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="text-3xl" /></a>
                    </div>
                </div>
            </div>
            <div className={`border-t ${mode === 'dark' ? 'border-gray-700' : 'border-gray-300'} mt-8 pt-8 text-center text-sm`}>
                &copy; {new Date().getFullYear()} E-Bharat. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;

