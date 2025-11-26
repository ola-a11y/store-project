import { Link } from "react-router-dom"; 
import Logo from '../assets/logo.png';
import map from '../assets/map.png';
import phone from '../assets/phone-call.png';
import massege from '../assets/massege.png';
import login from '../assets/Login-.png';
import about from '../assets/female.png';

function Footer() {
    return (
       <div className="">
      <div className="justify-evenly items-start pt-4 border-t-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-4 px-4"> {/* <-- ضفت gap-y و px */}
        
      <Link to="/" className="flex items-center rounded p-1">
        <img src={Logo} alt="Amazon Logo" className="w-10" />
        <span className="text-lg font-semibold">NATURE'S GLOW</span>
      </Link>

       <ul className='pt-5 sm:pt-0'>
        <h2 className='text-xl text-gray-800 pb-4 font-semibold'> Contact Us</h2>
          
        <li className='flex items-center gap-6 text-xs text-gray-600 pb-4'>
            <img src={map} alt='' className="w-6" />111 north avenue Orlando, FL 32801
          </li>
          
        <li className='pb-4'>
            <a href="tel:3523064415" 
               className="flex items-center gap-6 text-xs text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
              <img src={phone} alt='' className="w-6" />352-306-4415
            </a>
          </li>

        <li className='pb-4'>
            <a href="mailto:support@amazon.com" 
               className="flex items-center gap-6 text-xs text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
              <img src={massege} alt='' className="w-6" />support@Nature'sGlow.com
            </a>
          </li>
       </ul>

       <ul className='pt-5 sm:pt-0'>
        <h2 className='text-xl text-gray-800 pb-4 font-semibold'>Account</h2>
          
        <li className='pb-4'>
            <Link to="/login" 
                  className="flex items-center gap-6 text-xs text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
              <img src={login} alt='' className="w-6" />Sign In
            </Link>
          </li>
       </ul>

       <ul className='pt-5 md:pt-0'>
        <h2 className='text-xl text-gray-800 pb-4 font-semibold'>Company</h2>

        <li className='pb-4'>
            <Link to="/about"
                  className="flex items-center gap-6 text-xs text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
              <img src={about} alt='' className="w-6" />About us
            </Link>
          </li>
       </ul>

       <ul className='pt-5 xl:pt-0'>
        <h2 className='text-xl text-gray-800 pb-4 font-semibold'>Resources</h2>
          
        <li className='pb-4'>
            <Link to="/privacy"
                  className="flex items-center gap-6 text-xs text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
              <img src={about} alt='' className="w-6" />Safety Privacy & Terms
            </Link>
          </li>
       </ul>
      </div>
    </div>
    )
  }
  export default Footer;
