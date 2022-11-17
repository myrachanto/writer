import { useState } from "react";
import {phone, email} from '../utils/myrconstants'

const Contact = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+254");
    const [location, setLocation] = useState("");
    const [road, setRoad] = useState("");
    const [house, setHouse] = useState("");
    const [emails, setEmails] = useState("");
    const [instructions, setInstructions] = useState("");
    const [errs, setErrs] = useState("");
    return ( 
        <div className="mt-32">
        <div className=" max-w-6xl bg-gray-100 mx-auto">
        <h1 className="text-black text-xl lg:text-3xl py-3">Message</h1>
         <div className="m-4 bg-gray-200 rounded-xl">
                    <div className="p-2">Email: {email}</div>
                    <div className="p-2">Phone: {phone} </div>
                </div>
                {errs && <div className="bg-red-200 text-red-700 rounded-md m-4 p-2">{errs}</div>}
                <div className="grid grid-cols-1 max-w-6xl gap-4 md:grid-cols-2 text-black px-4  shadow-md">
                  <div className="name">
                    <label>Full Name</label>
                    <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} className="inpus"/>
                  </div>
                  <div className="phone">
                    <label>Phone Number</label>
                    <input type="number"  value={phoneNumber} name="phone" onChange={(e) => setPhoneNumber(e.target.value)}  className="inpus"/>
                  </div>
                  <div className="location">
                    <label>Your Location</label>
                    <input type="text"  value={location} name="location" onChange={(e) => setLocation(e.target.value)} className="inpus"/>
                  </div>
                  <div className="Road/Street">
                    <label>Road/ street</label>
                    <input type="text"  value={road} name="road" onChange={(e) => setRoad(e.target.value)}  className="inpus"/>
                  </div>
                  <div className="House">
                    <label>House</label>
                    <input type="text"  value={house} name="house" onChange={(e) => setHouse(e.target.value)} className="inpus"/>
                  </div>
                  <div className="email">
                    <label>Email Address</label>
                    <input type="email"  value={emails} name="email" onChange={(e) => setEmails(e.target.value)} className="inpus"/>
                  </div>
                  <div className="instructions mt-2 mb-5">
                    <label>Message</label>
                    <textarea   value={instructions} name="instructions" onChange={(e) => setInstructions(e.target.value)} className="inpus"></textarea>
                  </div>
                </div>
                  <hr />
                    <div className=" flex justify-end items-center mr-4 my-4 pb-10">
                    <div className="to"><button className="py-2 px-4 coloring text-white rounded-md"  >Message Us</button></div>
                    </div>
                  </div>
          </div>
     );
}
 
export default Contact;