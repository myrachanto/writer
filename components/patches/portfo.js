const Portfo = ({portfo}) => {
    return ( 
        <div className="  m-2">
       <div className="flex justify-center items-center"> <img src={portfo.icon} className="h-20" /></div>
            <div className="">
                <div className=" flex justify-center  items-center text-base p-2 font-semibold capitalize">{portfo.title}</div> 
            <div className=" flex flex-wrap text-base p-2">{portfo.content}</div></div>
        </div>
     );
}
 
export default Portfo;