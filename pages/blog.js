import { useState } from "react";
import Blogitem from "../components/patches/blogitem";
// import Portfo from "../components/patches/portfo";
import { host } from "../utils/myrconstants"
export const getStaticProps = async (context) => {
  const res = await fetch(`${host}/api/blog`)
  const data =  await res.json()
  return {
      props: {items: data.articles,},
      revalidate: 10,
  }
}
const Blog = ({items}) => {
  // console.log("------------------", items)
    return ( 
        <div>
    <div className="my-5 mt-24">
    <div className='lg:mt-0'>
      <h2 className='flex justify-center items-center font-semibold py-10'>Blogs</h2>
      <div className='max-w-7xl  2xl:mx-auto mx-4 grid lg:grid-cols-3 md:grid-cols-2'>
      {items && items.map(item => (
        <Blogitem item={item} key={item._id}/>
      ))}
      </div>
      </div>
    </div>
  </div>
     );
}
 
export default Blog;