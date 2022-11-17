import Link from "next/link";

const Carocard = () => {
    return ( 
        <>
            <div className="w-full coloring1  bg-blue-700 gradient">
                <div className=" caroheigth  w-full pt-16 grid grid-cols-2 gap-10 relative isolate">
                    <div className="absolute top-60 left-72">
                    <img src="trace.svg" alt="responsive web development" className=""/>
                    </div>
                    <div className="absolute text-black top-28 z-30 bg-slate-50 p-2 comme">
                        <div className="font-bold">Excellent</div>
                        <div className="text-sm">Based on 167 customer’s reviews</div>
                    </div>
                    <div className="absolute text-black bottom-36 left-60 z-30 bg-slate-50 p-2 helps bg-orange-200">
                        <div className="font-bold">Hi there!</div>
                        <div className="text-sm">Our expert writers are ready to help.</div>
                    </div>
                    <div className="absolute top-44 picsider">
                    <img src="dissertation-help-and-capstone-project.jpg" alt="responsive web development" className="h-16 rounded-full w-16 object-cover"/>
                    </div>
                    <div className="absolute bottom-44 left-96 z-30 ">
                    <img src="business-plan-and-case-study.jpg" alt="responsive web development" className="h-16 rounded-full w-16 object-cover"/>
                    </div>
                    <div className="absolute top-24 right-10 rounded-2xl bg-slate-300 text-black"> 
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
                    </div></div>
                <div className="h-screen  bg-blue-800 rounded-3xl text-white">
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
                </div></div>
        </>
     );
}
 
export default Carocard;