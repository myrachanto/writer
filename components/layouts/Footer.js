import { useState } from "react";
import Foot from "./Foot";

const Footer = () => {
    const [footers, setFooters] = useState([
        {   id:1,
            title: { head: 'Links', link: '#' },
            link1: { head: 'FAQ', link: '#' },
            link2: { head: 'Help', link: '#' },
            link3: { head: 'classic', link: '#' }
          },
          { id:2,
            title: { head: 'Legal', link: '#' },
            link1: { head: 'Terms', link: '#' },
            link2: { head: 'Privacy', link: '#' },
            link3: { head: 'Contract', link: '#' }
          },
          {
            id:3,
            title: { head: 'Firm', link: '#' },
            link1: { head: 'Blog', link: '/blog' },
            link2: { head: 'About Us', link: '/aboutus' },
            link3: { head: 'Contact', link: '/contact' }
          },
          {id:4,
            title: { head: 'Social', link: '#' },
            link1: { head: 'Facebook', link: '#' },
            link2: { head: 'Twitter', link: '#' },
            link3: { head: 'Instagram', link: '#' }
          }
    ])
    return ( 
        <div className="coloring">
          <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center flex-wrap px-4 lg:px-0 mx-4">
                {footers.map(foot => {
                    return (
                        <Foot foot={foot} key={foot.id}/>
                    )
                })}
            </div>
            <div className="flex flex-wrap justify-center items-center text-white mx-4"><a href="https://chantosweb.co.ke">  Developed by Chantosweb Developers</a></div>
        </div>
        </div>
     );
}
 
export default Footer;