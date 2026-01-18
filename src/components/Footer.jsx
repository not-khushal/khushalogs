import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-black mt-10 text-xs font-light uppercase tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Changed to khushalogs */}
        <div>
          <h3 className="font-medium text-base normal-case mb-4">khushalogs</h3>
        </div>

        <div className="flex flex-col gap-2">
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>

        <div className="flex flex-col gap-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">LinkedIn</a>
        </div>

        <div className="text-right md:text-left">
          <a 
            href="mailto:khaitankhushal28@gmail.com" 
            className="hover:underline"
          >
            contact@khushal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;