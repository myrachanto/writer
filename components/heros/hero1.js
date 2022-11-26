import Image from 'next/image'
import {host} from "../../utils/myrconstants"
const Hero1 = ({heading, meta, capture,image,title}) => {
    // console.log(">>>>>>>>>>>>>>>>>", heading)
    return ( 
        <div className="home_banner " >
            <div className="overlay ">
            <div className="max-w-7xl xl:mx-auto ">
            <div className="grid md:grid-cols-2 z-10 mx-6  ">
                <div className=" mt-32 ">
                    { heading && <h1 className="text-2xl text-white font-bold py-2">{heading}</h1>}
                    { meta && <div className="text-lg  text-white py-2">{meta}</div>}
                    { capture && <div className="text-lg  text-white py-2">{capture}</div>}
                </div>
                <div className='flex justify-center items-center p-5 mt-28'>
                 {image &&    <Image
                        src={`${host}/uploads/blog/${image}`}
                        alt={title}
                        width={500}
                        height={400}
                        priority
                        className="cardimg rounded-lg"
                    />}
            </div>
                <div>
                </div>
            </div>
            
            </div>
            </div>

        </div>
     );
}
 
export default Hero1;