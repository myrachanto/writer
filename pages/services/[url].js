import Link from "next/link";
import Head from 'next/head'
import Hero1 from "../../components/heros/hero1";
import Ordering from "../../components/patches/ordering";
import {host2} from "../../utils/myrconstants"

export const getStaticProps = async ({params}) => {
    const res = await fetch(`${host2}/api/services/child/` + params.url)
     const data =  await res.json()
     let datas = await fetch(`${host2}/api/data/keywords`)
      datas =  await datas.json()
     if (Object.keys(data).length === 0) {
      return {
        notFound: true,
        props: {},
        revalidate: 10,
      };
    } 
    if (Object.keys(datas).length === 0) {
      return {
        notFound: true,
        props: {},
        revalidate: 10,
      };
    }
    return {
        props: {service: data.service, keywords: datas.keywords || []}
    }
}
export const getStaticPaths = async() => {
  let data = await fetch(`${host2}/api/services`)
  let datas = await fetch(`${host2}/api/data/keywords`)
    data = await data.json();
    let paths = [];
    datas = await datas.json();
    // console.log("--------------keywords", datas.keywords)
    const results = datalooper(datas.keywords)
    data.services?.forEach((blog) => {
      blog?.children.forEach((child) => {
      paths.push({
        params: {
            url: child.id.url
        },
      });
    });
    });
    const unique = [...new Map(results.map((m) => [m.url, m])).values()];
    // console.log("--------------service+++++++++", unique)
    unique?.forEach((blog) => {
      paths.push({
        params: {
            url: blog.url
        },
      });
    });
  
    return {
      paths,
      fallback: true,
    };
  }
  const formater = (item)=>{
    // console.log("++++++++++++++++",item)
    const myArray = item.url.split("/");
    // console.log("++++++++++++++++",myArray)
    item.url = myArray[2]
    // console.log("++++++++++++++++",item.url)
    return item
  }
  const datalooper = (data)=>{
    let results1 = []
    let results = data.filter(item => {
     let res = servicechecker(item.url)
      if (res){
        item = formater(item)
        results1.push(item)
      }
    })
    return results1
  }
  const servicechecker = (str) =>{
    const myArray = str.split("/");
    if (myArray[1] === "services"){
      return true
    }else{
      return false
    }
  
  }
const Service = ({service, keywords}) => {
    // console.log("--------------brrrrrrr", keywords)
    return ( 
        <>
        {service &&
        <>
        <Head >
          {service && <title>{service.metaTitle}</title> || <title>Writer </title>}
          {service && <meta name="description" content={service.metaDescription} /> || <meta name="description" content="Generated by create next app" /> }
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {service && <div className="">
            <Hero1 heading={service.h1}  meta={service.metaDescription} capture={service.capture} title={service.title}/>
            <div className="max-w-7xl 2xl:mx-auto mx-6 peer py-4">
           <div className="text-base mt-8 servi" dangerouslySetInnerHTML={{__html: service.description}}>
             </div>
              {service.parta && <div className="text-base  servi" dangerouslySetInnerHTML={{__html: service.parta}}></div>}
              {service.partb && <div className="text-base  servi" dangerouslySetInnerHTML={{__html: service.partb}}></div>}
              {service.partc &&  <div className="text-base  servi" dangerouslySetInnerHTML={{__html: service.partc}}></div>}
             <div className="grid md:grid-cols-3 bg-slate-100 rounded-md">
                {keywords && keywords.map(keyword => (
                    <Link href={keyword.url}  key={keyword.name}><div className=" p-2 cursor-pointer">{keyword.title}</div></Link>
                ))}
             </div>
            </div>
        </div>}
        <div className='-mb-5'><Ordering /></div>
        </>
      }
        </>
     );
}
 
export default Service;