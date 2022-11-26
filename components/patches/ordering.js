const Ordering = ({title}) => {
    return ( 
        <div className="">
        <div className="max-w-7xl 2xl:mx-auto mx-6  my-5 py-4 coloring text-white oderis">
           { title && <h2 className="flex justify-center items-center font-semibold text-2xl lg:text-4xl py-3 ">{title} </h2> || <h2 className="flex justify-center items-center font-semibold text-2xl lg:text-4xl py-3 ">Make Order</h2>}
            <div className="">
                <p className=" text-center text-xl px-2">
                We have over 205 professional writers and 178 editors ready to help you complete that assignment and attain academic excellence. We have made over 50k customers happy with a customer return rate of 7/10 due to 91% customer satisfaction rate. 
                </p>
            </div>
            <div className="flex justify-center items-center my-5"><a href="https://acemywriter.com/order/login" target="_blank"><button className="p-2 bg-white coloring1 rounded-lg w-20 mr-5">Login</button></a> or <a href="https://acemywriter.com/order/" target="_blank"><button  className="p-2  bg-orange-500 rounded-lg w-40 ml-5">Order Now</button></a></div>
        </div>
        </div>
     );
}
 
export default Ordering;