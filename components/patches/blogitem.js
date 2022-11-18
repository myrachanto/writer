// import { host } from '../../utils/constants'
import Link from "next/link";
// import Image from 'next/image'
const Blogitem = ({item}) => {
    return ( 
          <div className="bg-gray-50 rounded overflow-hidden md:w-96 shadow-lg m-2">

       {/* <Link href={'/blog/'+item.url}>
        <img src={`${host}/${item.icon}`} className="w-full object-cover h-48 md:h-96 hover:cursor-pointer " alt={item.title} /></Link> */}
        <img src={item.icon} className="h-20" />
       {/* <Link href={'/celebration/'+item.url}>
        <Image
        // loader={myLoader}
        src={`${host}/${item.picture}`}
        alt={item.altertag}
        width={500}
        height={500}
        priority
        className="cardimg"
      /></Link> */}
          <hr className="md:my-2" />
         <div className="md:m-4 text-base  ">
           
       <Link href={'/blog/'+item.url}><h4 className="text-lg coloring1 my-2 font-semibold hover:cursor-pointer">{item.title}</h4></Link>
           <div className="text-base" dangerouslySetInnerHTML={{__html: item.content.substring(0,200) + "..."}}>
         </div>
         </div>
           <div className='m-2 flex justify-end items-center coloring1 ' >
            <Link href={'/blog/'+item.url}  ><span className='hover:cursor-pointer font-bold'>Read More</span></Link>
            </div>
         </div>
     );
}
 
export default Blogitem;