import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {phone, email} from '../../utils/myrconstants'

const Navbar = ({}) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const menuset = (e) => {
    setIsOpen(isOpen = !isOpen)
  }
  
  useEffect(() =>{
    try {
       setIsOpen(isOpen = false);
    }catch(err){
    }
  }, [router])
    return (
        <div className="mb-5 max-w-7xl">
          <div id="header" className=" w-full z-30 top-0 bg-gray-100 fixed">
              <div className="px-2 w-full flex justify-between  items-center mt-0 py-3 bg-blue-600">  
                <div className="lg:px-0 ">
                    <Link href="/" className=" no-underline hover:no-underline " >
                        <div className="text-white py-1 px-4 font-bold text-lg">Gilbert Writers</div>
                    </Link>
              </div>    
              <button onClick={menuset}>
                  <label className="cursor-pointer lg:hidden flex px-4">
                      <svg className="fill-current text-white " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                          <title>menu</title>
                          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                      </svg>
                  </label>
                </button>
                <div className='text-white'>+12345667890</div>
                <div className="lg:flex hidden justify-end px-2 items-center order-2  w-1/2">
                      <nav className="lg:flex items-center justify-between text-sm text-white " >
                        <div className="px-2 py-1 flex justify-start capitalize  " >
                        <Link href="/"  className="no-underline ">PRICING</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize  " >
                        <Link href="/portfolio"  className="no-underline ">ABOUT US</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize  " >
                        <Link href="/aboutus"  className="no-underline ">CONTACT US</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize  " >
                        <Link href="/blog"  className="no-underline ">Log in</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize  " >
                        <button type="submit"  className="no-underline p-2 bg-orange-400 rounded-md">Order Now</button></div>
                      </nav>
                  </div>
                  {isOpen ? (
                    <nav className=" lg:hidden w-full order-2 grid grid-cols-3 text-white">
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/"  className="no-underline   font-bold ">Home</Link></div>
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/portfolio"  className="no-underline ">Projects</Link></div>
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/aboutus"  className="no-underline ">About Us</Link></div>
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/blog"  className="no-underline ">Blog</Link></div>
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/contact"  className="no-underline ">Contact Us</Link></div>
                    </nav>
                  ) :   <div className="hidden"></div> }
                  
                  <div className=" lg:hidden  flex items-center" id="nav-content">
                    
                  <div className="block lg:hidden text-black font-semibold">{phone}</div>
                  </div>
              </div>
          </div>
      </div>
     );
}
 
export default Navbar;