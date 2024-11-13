import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.56c-.88.39-1.83.65-2.83.77a4.93 4.93 0 002.17-2.72 9.83 9.83 0 01-3.13 1.19 4.92 4.92 0 00-8.39 4.49A13.97 13.97 0 011.67 3.15a4.91 4.91 0 001.52 6.56 4.9 4.9 0 01-2.23-.61v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.87 9.87 0 01-6.12 2.1c-.4 0-.79-.02-1.17-.07A13.93 13.93 0 007.62 21c9 0 13.92-7.45 13.92-13.91 0-.21 0-.42-.02-.63a9.94 9.94 0 002.46-2.54z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.5C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.78V1.72C24 .77 23.21 0 22.23 0zM7.12 20.52H3.56V9h3.56v11.52zM5.34 7.68a2.06 2.06 0 01-2.06-2.06c0-1.13.92-2.06 2.06-2.06a2.06 2.06 0 012.06 2.06 2.06 2.06 0 01-2.06 2.06zm15.18 12.84h-3.56v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.52h-3.56V9h3.42v1.57h.05c.48-.9 1.67-1.84 3.44-1.84 3.67 0 4.35 2.42 4.35 5.58v6.21z"/></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .29a12 12 0 00-3.8 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.6-4.04-1.6-.54-1.36-1.33-1.72-1.33-1.72-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.08 1.85 2.82 1.32 3.51 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.46-1.34-5.46-5.97 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.54.12-3.2 0 0 1-.32 3.3 1.24a11.5 11.5 0 016 0c2.3-1.56 3.3-1.24 3.3-1.24.66 1.66.24 2.89.12 3.2a4.6 4.6 0 011.24 3.24c0 4.64-2.8 5.67-5.47 5.97.43.36.82 1.07.82 2.17v3.22c0 .32.22.7.83.58A12 12 0 0012 .29"/></svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-4">
        © {new Date().getFullYear()} Ahmed Ali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
