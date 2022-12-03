// import Link from "next/link";
import { useEffect, useState } from "react";
import {levels,writerLevels,times, services,spacingOptions} from "../../utils/mycalcdata"

const Carocard = ({h1,capture}) => {
    const [page, setPage] = useState(1);
    const [level, setLevel] = useState("High school");
    const [writer, setWriter] = useState("Standard");
    const [deadline, setDeadline] = useState("6 days");
    const [service, setService] = useState("Writing from scratch");
    const [spacing, setSpacing] = useState("Double");
    const [total, setTotal] = useState();
    useEffect(() =>{
        try {
          Gettotal()
        }catch{
          console.log("-------------->>>>>>>>>>>")
        }
      },[])
    const  Gettotal =(e) =>{
        // console.log("----------------->")
        const _level = levels.find((item) => { return item.name === level })
        const levelwite = _level ? _level.rate : 1
        // console.log("----------------->level", level)
        //  console.log(level, 'level')
        const charge = times.find((t) => { return t.name === deadline }) || false
        //  console.log('Charge', charge)
        const timeCharge = charge ? charge.charge : 1
        // console.log("----------------->timeCharge", timeCharge)
  
        const _serviceType = services.find((s) => { return s.name === service })
        const serviceType = _serviceType ? _serviceType.charge : 1
        // console.log("----------------->serviceType", serviceType)
        // const _spacing = spacingOptions.find((s) => { return s.name === spacing })
        let pagespacing = spacing === 'Single spacing' ? 2 : 1
        console.log("----------------->spacing ", spacing)
        const _wLevel = writerLevels.find((l) => { return l.level === writer })
        const wLevel = _wLevel ? _wLevel.rate : 1
        // console.log("----------------->wLevel", wLevel)
        // const pragReport = this.order.pragReport ? 5 : 0
        const pragReport = 1
        const _page = page
        // console.log("----------------->pragReport", pragReport)
        // console.log(this.order.pages, level, timeCharge, wLevel, spacing, serviceType, 18)
        const price = (_page * levelwite * timeCharge * wLevel * pagespacing * serviceType * 13) + pragReport
        // console.log("----------------->pragReport", price)
  
        setTotal(total => price.toFixed(2))
      }
    return ( 
        <>
        <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto pt-10 coloring1 hidden 2xl:block gradient">
            <div className=" hidden caroheigths  w-full  pt-16 lg:grid grid-cols-2 gap-10 relative isolate">
                <div className="hidden lg:block absolute top-60 left-72">
                <img src="trace.svg" alt="responsive web development" className=""/>
                </div>
                <div className="hidden lg:block absolute text-black top-28 z-30 bg-slate-50 p-2 comme">
                    <div className="font-bold">Excellent</div>
                    <div className="text-sm">Based on 167 customer’s reviews</div>
                </div>
                <div className="hidden lg:block absolute text-black bottom-36 left-60 z-30  p-2 helps bg-orange-200">
                    <div className="font-bold">Hi there!</div>
                    <div className="text-sm">Our expert writers are ready to help.</div>
                </div>
                <div className="hidden lg:block absolute top-44 picsider">
                <img src="dissertation-help-and-capstone-project.jpg" alt="responsive web development" className="h-16 rounded-full w-16 object-cover"/>
                </div>
                <div className="hidden lg:block absolute bottom-44 left-96 z-30 ">
                <img src="business-plan-and-case-study.jpg" alt="responsive web development" className="h-16 rounded-full w-16 object-cover"/>
                </div>
                <div className="hidden lg:block absolute top-24 right-10 rounded-2xl bg-slate-300 text-black"> 
                <form className=" w-96 px-4" onChange={(e) => Gettotal()}>
                    <div className="flex justify-between items-center">
                        <div className="text-2xl my-2 py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setLevel(e.target.value)}>
                        {levels && levels.map(level =>(
                        <option value={level.name} key={level.name}>{level.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setWriter(e.target.value)}>
                       {writerLevels && writerLevels.map(writer =>(
                            <option value={writer.level} key={writer.level}>{writer.level}</option>
                       ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setDeadline(e.target.value)}>
                        {times && times.map(tim =>(
                            <option value={tim.charge} key={tim.name}>{tim.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setService(e.target.value)}>
                        {services && services.map(ser =>(
                            <option value={ser.name} key={ser.name}>{ser.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="my-2 flex justify-between " >
                        <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                     <input type="number"  value={page} onChange={(e) => setPage(e.target.value)}  className="inpus"/>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setSpacing(e.target.value)}>
                        {spacingOptions && spacingOptions.map(space =>(
                        <option value={space.name} key={space.name}>{space.name}</option>
                        ))}
                        </select>
                    </div>
                    {/* <div className="p-1 flex justify-between items-center">
                    <input type="radio" value="single" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'single'}/> Single Spacing
                    <input type="radio" value="double" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'double'} /> Double
                    </div> */}
                    <div className=" flex justify-between items-center my-3">
                    {/* <div className=" text-gray-500">$12.99</div> */}
                    <div></div>
                    {total && <div className="text-2xl font-bold">{total}</div> ||
                    <div className="text-2xl font-bold">$9.99</div> }
                    </div>
                <div>
                <a href="https://acemywriter.com/order/" target="_blank"  rel="noreferrer"><button className="rounded-lg bg-blue-700 w-full my-4 p-3 text-white font-semibold">Continue to Order</button></a>
                </div>
                </form>
                </div>
            <div className="h-7/12 hidden lg:block   bg-blue-800 rounded-3xl text-white">
                <div className="my-20 ml-5"><button className=" text-sm bg-blue-900 px-3 py-2 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                </div>
                <h1 className=" mx-8 text-4xl font-bold">
                {h1}
                </h1>
                <div className="mx-8 mt-8 text-lg"> 
                {capture}
                </div>
            </div>
            <div className="h-7/12  bg-blue-800 rounded-3xl mt-20">
                
                </div>
            </div>
            </div>
            <div className="max-w-7xl 2xl:hidden mx-auto coloring1  bg-blue-700 gradient">
                <div className=" hidden caroheigth  w-full  pt-16 lg:grid grid-cols-2 gap-10 relative isolate">
                    <div className="hidden lg:block absolute top-60 left-72">
                    <img src="trace.svg" alt="responsive web development" className=""/>
                    </div>
                    <div className="hidden lg:block absolute text-black top-28 z-30 bg-slate-50 p-2 comme">
                        <div className="font-bold">Excellent</div>
                        <div className="text-sm">Based on 167 customer’s reviews</div>
                    </div>
                    <div className="hidden lg:block absolute text-black bottom-36 left-60 z-30  p-2 helps bg-orange-200">
                        <div className="font-bold">Hi there!</div>
                        <div className="text-sm">Our expert writers are ready to help.</div>
                    </div>
                    <div className="hidden lg:block absolute top-44 picsider">
                    <img src="dissertation-help-and-capstone-project.jpg" alt="responsive web development" className="h-16 rounded-full w-16 object-cover"/>
                    </div>
                    <div className="hidden lg:block absolute bottom-44 left-96 z-30 ">
                    <img src="business-plan-and-case-study.jpg" alt="responsive web development" className="h-16 rounded-full w-16 object-cover"/>
                    </div>
                    <div className="hidden lg:block absolute top-24 right-10 rounded-2xl bg-slate-300 text-black"> 
                    <form className=" w-96 px-4" onChange={(e) => Gettotal()}>
                    <div className="flex justify-between items-center">
                        <div className="text-2xl my-2 py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setLevel(e.target.value)}>
                        {levels && levels.map(level =>(
                        <option value={level.name} key={level.name}>{level.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setWriter(e.target.value)}>
                       {writerLevels && writerLevels.map(writer =>(
                            <option value={writer.level} key={writer.level}>{writer.level}</option>
                       ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setDeadline(e.target.value)}>
                        {times && times.map(tim =>(
                            <option value={tim.charge} key={tim.name}>{tim.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setService(e.target.value)}>
                        {services && services.map(ser =>(
                            <option value={ser.name} key={ser.name}>{ser.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="my-2 flex justify-between " >
                        <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                     <input type="number"  value={page} name="phone" onChange={(e) => setPage(e.target.value)}  className="inpus"/>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setSpacing(e.target.value)}>
                        {spacingOptions && spacingOptions.map(space =>(
                        <option value={space.name} key={space.name}>{space.name}</option>
                        ))}
                        </select>
                    </div>
                    {/* <div className="p-1 flex justify-between items-center">
                    <input type="radio" value="single" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'single'}/> Single Spacing
                    <input type="radio" value="double" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'double'} /> Double
                    </div> */}
                    <div className=" flex justify-between items-center my-3">
                    {/* <div className=" text-gray-500">$12.99</div> */}
                    <div></div>
                    {total && <div className="text-2xl font-bold">{total}</div> ||
                    <div className="text-2xl font-bold">$9.99</div> }
                    </div>
                    <div>
                    <a href="https://acemywriter.com/order/" target="_blank"  rel="noreferrer"><button className="rounded-lg bg-blue-700 w-full my-4 p-3 text-white font-semibold">Continue to Order</button></a>
                    </div>
                    </form>
                    </div>
                <div className="h-screen hidden lg:block   bg-blue-800 rounded-3xl text-white">
                    <div className="my-20 ml-5"><button className=" text-sm bg-blue-900 px-3 py-2 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                    </div>
                    <h1 className=" mx-8 text-4xl font-bold">
                     {h1}
                    </h1>
                    <div className="mx-8 mt-8 text-lg"> 
                {capture}
                    </div>
                </div>
                <div className="h-screen  bg-blue-800 rounded-3xl mt-20">
                    
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 md:hidden relative ">
                   <div className="absolute right-12 bottom-52">
                    <img src="dissertation-help-and-capstone-project.jpg" alt="responsive web development" className="h-28 rounded-full w-28 object-cover"/>
                    </div>
                   <div className="absolute left-32 bottom-5">
                    <img src="business-plan-and-case-study.jpg" alt="responsive web development" className="h-28 rounded-full w-28 object-cover"/>
                    </div>
                    <div className=" absolute text-black bottom-64 left-2 bg-slate-50 p-2  commemobile">
                        <div className="font-bold">Excellent</div>
                        <div className="text-sm">Based on 167 customer’s reviews</div>
                    </div>
                    <div className="absolute text-black bottom-20 left-52 z-30  p-2 helpsmobile bg-orange-200">
                        <div className="font-bold">Hi there!</div>
                        <div className="text-sm">Our expert writers are ready to help.</div>
                    </div>
                    <div className="lg:hidden absolute -bottom-96 contcal right-12 rounded-2xl bg-slate-300 text-black"> 
                    <form className=" w-80 px-4" onChange={(e) => Gettotal()}>
                    <div className="flex justify-between items-center">
                        <div className="text-2xl my-2 py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setLevel(e.target.value)}>
                        {levels && levels.map(level =>(
                        <option value={level.name} key={level.name}>{level.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setWriter(e.target.value)}>
                       {writerLevels && writerLevels.map(writer =>(
                            <option value={writer.level} key={writer.level}>{writer.level}</option>
                       ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setDeadline(e.target.value)}>
                        {times && times.map(tim =>(
                            <option value={tim.charge} key={tim.name}>{tim.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setService(e.target.value)}>
                        {services && services.map(ser =>(
                            <option value={ser.name} key={ser.name}>{ser.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="my-2 flex justify-between " >
                        <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                     <input type="number"  value={page} name="phone" onChange={(e) => setPage(e.target.value)}  className="inpus"/>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setSpacing(e.target.value)}>
                        {spacingOptions && spacingOptions.map(space =>(
                        <option value={space.name} key={space.name}>{space.name}</option>
                        ))}
                        </select>
                    </div>
                    {/* <div className="p-1 flex justify-between items-center">
                    <input type="radio" value="single" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'single'}/> Single Spacing
                    <input type="radio" value="double" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'double'} /> Double
                    </div> */}
                    <div className=" flex justify-between items-center my-3">
                    {/* <div className=" text-gray-500">$12.99</div> */}
                    <div></div>
                    {total && <div className="text-2xl font-bold">{total}</div> ||
                    <div className="text-2xl font-bold">$9.99</div> }
                    </div>
                    <div>
                    <a href="https://acemywriter.com/order/" target="_blank"  rel="noreferrer"><button className="rounded-lg bg-blue-700 w-full my-2 p-3 text-white font-semibold">Continue to Order</button></a>
                    </div>
                    </form>
                    </div>
                    <div className="text-white">
                    <div className="mt-20 flex justify-center items-center"><button className=" text-sm bg-blue-900 text-white px-3 py-2 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                    </div>
                    <h1 className=" mx-8 my-5 text-2xl font-bold text-center">
                     {h1}
                    </h1>
                    <div className=" text-lg text-center py-5"> 
                    {capture}
                    </div>
                    </div>
                    <div className="mx-4">
                    <img src="trace.svg" alt="responsive web development" className=""/></div>
                    <div></div>
                </div>
                <div className="md:grid md:grid-cols-2 hidden lg:hidden relative mt-10">
                   <div className="absolute right-12 bottom-52">
                    <img src="dissertation-help-and-capstone-project.jpg" alt="responsive web development" className="h-28 rounded-full w-28 object-cover"/>
                    </div>
                   <div className="absolute right-64 bottom-20">
                    <img src="business-plan-and-case-study.jpg" alt="responsive web development" className="h-28 rounded-full w-28 object-cover"/>
                    </div>
                    <div className=" absolute text-black top-20 right-32 bg-slate-50 p-2  commemobile">
                        <div className="font-bold">Excellent</div>
                        <div className="text-sm">Based on 167 customer’s reviews</div>
                    </div>
                    <div className="absolute text-black bottom-24 right-10 z-30  p-2 helpsmobile bg-orange-200">
                        <div className="font-bold">Hi there!</div>
                        <div className="text-sm">Our expert writers are ready to help.</div>
                    </div>
                    <div className="hidden md:block absolute -bottom-96 contcals right-32 rounded-2xl bg-slate-300 text-black"> 
                    <form className=" w-full px-4" onChange={(e) => Gettotal()}>
                    <div className="flex justify-between items-center">
                        <div className="text-2xl my-2 py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setLevel(e.target.value)}>
                        {levels && levels.map(level =>(
                        <option value={level.name} key={level.name}>{level.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setWriter(e.target.value)}>
                       {writerLevels && writerLevels.map(writer =>(
                            <option value={writer.level} key={writer.level}>{writer.level}</option>
                       ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setDeadline(e.target.value)}>
                        {times && times.map(tim =>(
                            <option value={tim.charge} key={tim.name}>{tim.name}</option>
                        ))}
                        </select>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setService(e.target.value)}>
                        {services && services.map(ser =>(
                            <option value={ser.name} key={ser.name}>{ser.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="my-2 flex justify-between " >
                        <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                     <input type="number"  value={page} name="phone" onChange={(e) => setPage(e.target.value)}  className="inpus"/>
                    </div>
                    <div>
                    <select  className=" px-2 py-2 rounded-lg w-full mt-2" onChange={(e) => setSpacing(e.target.value)}>
                        {spacingOptions && spacingOptions.map(space =>(
                        <option value={space.name} key={space.name}>{space.name}</option>
                        ))}
                        </select>
                    </div>
                    {/* <div className="p-1 flex justify-between items-center">
                    <input type="radio" value="single" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'single'}/> Single Spacing
                    <input type="radio" value="double" name="spacing"  onChange={(e) =>onchangeRadio()} checked={spacing === 'double'} /> Double
                    </div> */}
                    <div className=" flex justify-between items-center my-3">
                    {/* <div className=" text-gray-500">$12.99</div> */}
                    <div></div>
                    {total && <div className="text-2xl font-bold">{total}</div> ||
                    <div className="text-2xl font-bold">$9.99</div> }
                    </div>
                    <div>
                    <a href="https://acemywriter.com/order/" target="_blank"  rel="noreferrer"><button className="rounded-lg bg-blue-700 w-full my-2 p-3 text-white font-semibold">Continue to Order</button></a>
                    </div>
                    </form>
                    </div>
                    <div className="text-white">
                    <div className="mt-20 flex justify-start items-center"><button className=" text-sm bg-blue-900 text-white px-3 py-2 mx-6 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                    </div>
                    <h1 className=" mx-8 my-5 text-2xl font-bold  ">
                     {h1}
                    </h1>
                    <div className=" text-lg  mx-6 py-5"> 
                    {capture}
                    </div>
                    </div>
                    <div className="mx-4">
                    <img src="trace.svg" alt="responsive web development" className=""/></div>
                    <div></div>
                </div>
                </div>
                </div>
        </>
     );
}
 
export default Carocard;