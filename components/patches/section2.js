import Image from 'next/image'
const Section2 = ({partd, partf1,partf2, partf3}) => {
    return ( 
        <div>
    <div className="my-2  mx-6 peer">
      <div className="flex justify-center items-center max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
      <div className="">
            <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partd}}></div>
       </div>
        <div className="flex justify-center items-center">
        <Image
        // loader={myLoader}
        src={"/business-plan-and-case-study.jpg"}
        alt="dissertation-help-and-capstone-project"
        width={500}
        height={300}
        priority
        className="w-full  object-cover cursor-pointer cardimg1"
      />
        {/* <img src="business-plan-and-case-study.jpg" alt="responsive web development" className="cardimg1"/> */}
      </div>
    </div>
    </div>
    <div className=" max-w-7xl xl:mx-auto ">
      <div className="grid md:grid-cols-2 gap-4">
    <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partf1}}></div>
           <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partf2}}></div>
    </div>
    </div>
    <div className=" max-w-7xl xl:mx-auto ">
    <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partf3}}></div>
      </div>
    </div>
  </div>
     );
}
 
export default Section2;