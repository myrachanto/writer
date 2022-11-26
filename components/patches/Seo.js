const Seo = ({heading, body}) => {
    return ( 
        <div className="max-w-7xl 2xl:mx-auto mx-6 bg-slate-100 p-2 rounded-md">
            <h2 className="">{heading}</h2>
           <div className="text-base mt-8 peer" dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
     );
}
 
export default Seo;