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
            <div className="max-w-7xl mx-auto px-2 2xl:px-0 flex  justify-between  items-center py-2 text-black ">
            <div className="lg:px-0  ">
                  <Link href="/" className=" coloring1 tracking-wide no-underline hover:no-underline " >
                      <div className="coloring1 py-1 px-4 2xl:px-0 font-bold text-lg">Gilbert Writers</div>
                  </Link>
            </div>
            <div className=" text-black  hidden md:block  font-semibold  text-right mx-4 2xl:mx-0">{phone}</div>
        </div>
        <hr />
        <div className='coloring'>
              <div className="px-2 2xl:px-0 max-w-7xl mx-auto flex flex-wrap justify-between lg:justify-start items-center mt-0 py-3 ">      
              <button onClick={menuset}>
                  <label className="cursor-pointer md:hidden flex px-4">
                      <svg className="fill-current text-white " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                          <title>menu</title>
                          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                      </svg>
                  </label>
                </button>
                <div className="md:flex hidden justify-end px-2 2xl:px-0 items-center w-full order-2">
                      <nav className="md:flex items-center justify-between text-sm text-white font-semibold" >
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="/service"  className="no-underline ">SERVICE</Link></div>
                        {/* <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="/"  className="no-underline ">PRICING</Link></div> */}
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="/aboutus"  className="no-underline ">ABOUT US</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="/blog"  className="no-underline ">BLOG</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="/contact"  className="no-underline ">CONTACT</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="https://acemywriter.com/order/login" className="no-underline ">Login</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <a href="https://acemywriter.com/order/" target="_blank" rel="noreferrer"><button type="submit"  className=" bg-orange-500 p-2 rounded-md">Order Now</button></a></div>
                        
                      </nav>
                  </div>
                  {isOpen ? (
                    <nav className=" md:hidden w-full order-2 text-white">
                    <div className="px-2 py-1 capitalize  font-bold" >
                    <Link href="/service"  className="no-underline   font-bold ">SERVICE</Link></div>
                        {/* <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/"  className="no-underline   font-bold ">PRICING</Link></div> */}
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/aboutus"  className="no-underline ">ABOUT US</Link></div>
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/contact"  className="no-underline ">CONTACT</Link></div>
                        <div className="px-2 py-1 capitalize  font-bold" >
                        <Link href="/blog"  className="no-underline ">BLOG</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <Link href="https://acemywriter.com/order/login"  className="no-underline ">Login</Link></div>
                        <div className="px-2 py-1 flex justify-start capitalize " >
                        <a href="https://acemywriter.com/order/" target="_blank" rel="noreferrer"><button type="submit"  className=" bg-orange-500 p-2 rounded-md">Order Now</button></a></div>
                    </nav>
                  ) :   <div className="hidden"></div> }
                  
                  <div className=" lg:hidden  flex items-center" id="nav-content">
                    
                  <div className="block md:hidden text-white font-semibold">{phone}</div>
                  </div>
              </div>
          </div>
          </div>
      </div>
     );
}
 
export default Navbar;