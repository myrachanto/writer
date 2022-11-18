import { useState } from "react";
import Blogitem from "../components/patches/blogitem";
import Portfo from "../components/patches/portfo";

const Blog = () => {
  const [portfolio, setPortfolio] = useState([
    {
      title: "Great customer reviews",
      content: "A satisfied customer is the best business strategy. We have satisfied thousands of customers and it can be seen on the reviews section. This has earned us retrun customers and referals which has enabled us to reach thousands of students online",
      icon: 'top/calendar.png'
    },
    {
      title: "Urgent Assignment Help",
      content: "Our Writers are available 24/7 and can handle any order as little as 3 hours Deadline and deliver excellent assignment. Feel free to contact our support which is always available to serve you through our live chat and email or whatsApp and your wish is our command.",
      icon: 'top/supp.png'
    },
    {
      title: "Private and confidential",
      content: "Customer privacy is crucial and we ensure that third parties do not have access to your information. We also do not resell any orders from our clients and hence your assignment is safe with us",
      icon: 'top/secure.png'
    },
    {
      title: "US native writers available",
      content: "We have ENL and ESL writers and hence we serve native students and international students seeking online assignment help. We can match every client with their desired quality and hence we have attained a substantial market commend",
      icon: 'top/writer.png'
    },
    {
      title: "Proffesional Editors",
      content: "Our editors have PHD from different fields and they will edit your paper to top notch quality before submitting it to you. We match each assignment who has the field qualification and hence proffesional and high quality assignment guarunteed",
      icon: 'top/edit.png'
    },
    {
      title: "Quality writers",
      content: "All our writers are verified and scrutinized for quality maintainance purposes. We also ensure that we regulary trainour writers regrading new writting standards and hence always deliver updated quality content and formats",
      icon: 'top/us.png'
    }
]);
    return ( 
        <div>
    <div className="my-5 mt-24">
    <div className='mt-96 lg:mt-0'>
      <h2 className='flex justify-center items-center font-semibold py-10'>Blogs</h2>
      <div className='max-w-7xl  2xl:mx-auto mx-4 grid lg:grid-cols-3 md:grid-cols-2'>
      {portfolio && portfolio.map(portfo => (
        <Blogitem item={portfo} key={portfo.title}/>
      ))}
      </div>
      </div>
    </div>
  </div>
     );
}
 
export default Blog;