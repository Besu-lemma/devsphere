import React from 'react';
import Link from 'next/link';
// Ensure Image is correctly imported
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    
      <footer className="text-slate-100 py-6 relative z-10" style={{ backgroundImage: 'url(/ba.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: Quick Links */}
            <div className='ml-11'>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="hover:text-orange-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-orange-400">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-orange-400">
                     Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-400">
                    Contact Us
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Column 2: Contact Information */}
            <div>
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <ul className="mt-4">
                <li>
                  <p>Email: <a href="mailto:info@example.com" className="hover:text-orange-400">Furtuconstruction@gmail.com</a></p>
                </li>
                <li>
                  <p>Phone: <a href="tel:+1234567890" className="hover:text-orange-300">+251 91 237 9833</a></p>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-4 flex rounded-lg space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-orange-700 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-orange-700 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/biruk-abebayehu-7a33b11a2"
                  target='_blank'
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-orange-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Column 4: Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-700"
                />
                <button
                  type="submit"
                  className="mt-2 w-full hover:bg-orange-400 bg-white text-primary py-2 rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section (Copyright) */}
          <div className="text-center text-sm">
            <p>&copy; 2025 Furtuu Construction Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
