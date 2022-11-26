const Section1 = ({footerContent,partb,partc1,partc2,partc3}) => {
    return ( 
        <div>
    <div className="my-5 py-5 mx-6 peer section1">
      <div className=" max-w-7xl xl:mx-auto ">
           <div className="text-base peer section1" dangerouslySetInnerHTML={{__html: footerContent}}></div>
      <div className="flexing  max-w-7xl xl:mx-auto mx-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" flex justify-center items-center">
          <img src="dissertation-help-and-capstone-project.jpg" alt="responsive web development" className="cardimg1"/>
        </div>
        <div className="">
            <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partb}}></div>
        </div>
    </div>
   
    </div>
    <div className="grid md:grid-cols-3 gap-4">
           <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partc1}}></div>
           <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partc2}}></div>
           <div className="text-base mt-8 peer " dangerouslySetInnerHTML={{__html: partc3}}></div>
    </div></div>
    </div>
  </div>
     );
}
 
export default Section1;