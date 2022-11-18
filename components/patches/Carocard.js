import Link from "next/link";

const Carocard = () => {
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
                <div className=" w-96 px-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl my-2 py-2">
                    Calculate the price of your order
                    </div>
                    <div></div>
                </div>
                <div>
                <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                    <option value="">Essay type</option>
                    <option value="admission-essay">Admission Essay</option>
                    </select>
                </div>
                <div>
                <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                    <option value="">Undergra. (years1-2)</option>
                    <option value="admission-essay">Admission Essay</option>
                    </select>
                </div>
                <div className="my-2 flex justify-between ">
                    <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                    <input type="number" className="rounded-lg"></input>
                </div>
                <div>
                <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                    <option value="8hrs">8hrs</option>
                    <option value="1day">1day</option>
                    </select>
                </div>
                <div className=" flex justify-between items-center my-3">
                <div className=" text-gray-500">$12.99</div>
                <div className="text-2xl font-bold">$12.99</div>
                </div>
                <div>
                    <button className="rounded-lg bg-blue-700 w-full my-4 p-3 text-white font-semibold">Continue to Order</button>
                </div>
                </div>
                </div>
            <div className="h-7/12 hidden lg:block   bg-blue-800 rounded-3xl text-white">
                <div className="my-20 ml-5"><button className=" text-sm bg-blue-900 px-3 py-2 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                </div>
                <div className=" mx-8 text-5xl font-bold">
                Let world-class writers take care of your assignments
                </div>
                <div className="mx-8 mt-8 text-lg"> 
                We play well with Blackboard, Canvas, Pearson, Webassign, Aleks, McGraw-Hill, and so much more!
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
                    <div className=" w-96 px-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl my-2 py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="">Essay type</option>
                        <option value="admission-essay">Admission Essay</option>
                        </select>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="">Undergra. (years1-2)</option>
                        <option value="admission-essay">Admission Essay</option>
                        </select>
                    </div>
                    <div className="my-2 flex justify-between ">
                        <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                        <input type="number" className="rounded-lg"></input>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="8hrs">8hrs</option>
                        <option value="1day">1day</option>
                        </select>
                    </div>
                    <div className=" flex justify-between items-center my-3">
                    <div className=" text-gray-500">$12.99</div>
                    <div className="text-2xl font-bold">$12.99</div>
                    </div>
                    <div>
                        <button className="rounded-lg bg-blue-700 w-full my-4 p-3 text-white font-semibold">Continue to Order</button>
                    </div>
                    </div>
                    </div>
                <div className="h-screen hidden lg:block   bg-blue-800 rounded-3xl text-white">
                    <div className="my-20 ml-5"><button className=" text-sm bg-blue-900 px-3 py-2 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                    </div>
                    <div className=" mx-8 text-5xl font-bold">
                    Let world-class writers take care of your assignments
                    </div>
                    <div className="mx-8 mt-8 text-lg"> 
                    We play well with Blackboard, Canvas, Pearson, Webassign, Aleks, McGraw-Hill, and so much more!
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
                    <div className="lg:hidden absolute -bottom-96 contcal right-2 rounded-2xl bg-slate-300 text-black"> 
                    <div className=" w-80 px-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-2 rounded-lg w-full mt-4">
                        <option value="">Essay type</option>
                        <option value="admission-essay">Admission Essay</option>
                        </select>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-2 rounded-lg w-full mt-4">
                        <option value="">Undergra. (years1-2)</option>
                        <option value="admission-essay">Admission Essay</option>
                        </select>
                    </div>
                    <div className="my-1 flex justify-between ">
                        <label>pages
                            {/* <span className="text-gray-500 text-sm">275 words</span> */}
                            </label>
                        <input type="number" className="rounded-lg"></input>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="8hrs">8hrs</option>
                        <option value="1day">1day</option>
                        </select>
                    </div>
                    <div className=" flex justify-between items-center my-2">
                    <div className=" text-gray-500">$12.99</div>
                    <div className="text-2xl font-bold">$12.99</div>
                    </div>
                    <div>
                        <button className="rounded-lg bg-blue-700 w-full my-2 p-3 text-white font-semibold">Continue to Order</button>
                    </div>
                    </div>
                    </div>
                    <div className="text-white">
                    <div className="mt-20 flex justify-center items-center"><button className=" text-sm bg-blue-900 text-white px-3 py-2 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                    </div>
                    <div className=" mx-8 my-5 text-3xl font-bold text-center">
                    Let world-class writers take care of your assignments
                    </div>
                    <div className=" text-lg text-center py-5"> 
                    We play well with Blackboard, Canvas, Pearson, Webassign, Aleks, McGraw-Hill, and so much more!
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
                    <div className=" w-full px-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl my-2 py-2">
                        Calculate the price of your order
                        </div>
                        <div></div>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="">Essay type</option>
                        <option value="admission-essay">Admission Essay</option>
                        </select>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="">Undergra. (years1-2)</option>
                        <option value="admission-essay">Admission Essay</option>
                        </select>
                    </div>
                    <div className="my-2 flex justify-between ">
                        <label>Number of pages<span className="text-gray-500 text-sm">275 words</span></label>
                        <input type="number" className="rounded-lg"></input>
                    </div>
                    <div>
                    <select name="cars" id="cars" className=" px-2 py-4 rounded-lg w-full mt-4">
                        <option value="8hrs">8hrs</option>
                        <option value="1day">1day</option>
                        </select>
                    </div>
                    <div className=" flex justify-between items-center my-3">
                    <div className=" text-gray-500">$12.99</div>
                    <div className="text-2xl font-bold">$12.99</div>
                    </div>
                    <div>
                        <button className="rounded-lg bg-blue-700 w-full my-2 p-3 text-white font-semibold">Continue to Order</button>
                    </div>
                    </div>
                    </div>
                    <div className="text-white">
                    <div className="mt-20 flex justify-start items-center"><button className=" text-sm bg-blue-900 text-white px-3 py-2 mx-6 rounded-2xl">Save 15%! Use FIRST-ORDER discount code  </button>
                    </div>
                    <div className=" mx-8 my-5 text-3xl font-bold  ">
                    Let world-class writers take care of your assignments
                    </div>
                    <div className=" text-lg  mx-6 py-5"> 
                    We play well with Blackboard, Canvas, Pearson, Webassign, Aleks, McGraw-Hill, and so much more!
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