import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/placeholder.svg" alt="Nexcent Logo" className="h-10 w-10" />
          <p className="mt-4 text-gray-400 text-center md:text-left">© 2024 Nexcent Ltd. All rights reserved</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="#">
              <img src="/placeholder.svg" alt="Social 1" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src="/placeholder.svg" alt="Social 2" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src="/placeholder.svg" alt="Social 3" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src="/placeholder.svg" alt="Social 4" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Support</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Stay up to date</h3>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-400 placeholder-gray-500"
            />
            <button className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
