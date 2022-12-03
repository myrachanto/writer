import Image from 'next/image'
const Portfo = ({portfo}) => {
    return ( 
        <div className="  m-2">
       <div className="flex justify-center items-center">
       <Image
        // loader={myLoader}
        src={"/"+portfo.icon}
        alt={portfo.title}
        width={100}
        height={100}
        priority
        className="w-full  object-cover cursor-pointer"
      />
         {/* <img src={portfo.icon} className="h-20" /> */}
         </div>
            <div className="">
                <div className=" flex justify-center  items-center text-base p-2 font-semibold capitalize">{portfo.title}</div> 
            <div className=" flex flex-wrap text-base p-2">{portfo.content}</div></div>
        </div>
     );
}
 
export default Portfo;