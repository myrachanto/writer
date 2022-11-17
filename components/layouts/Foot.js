import Link from 'next/link'
const Foot = ({foot}) => {
    // console.log('>>>>>>>>>>', foot)
    return ( 
        <div className="flex justify-center items-center">
    <div className="main">
                <ul className="list-none mb-6">
                <li className="mt-2 mr-2 text-white md:block md:mr-0">
                <div className="flex justify-start items-center">{foot.title.head}</div>
                </li>
                <li className="mt-2 mr-2 text-white md:block md:mr-0">
                    <Link href={foot.link1.link} className="link">{foot.link1.head}</Link>
                </li>
                <li className="mt-2 mr-2 text-white md:block md:mr-0">
                    <Link href={foot.link2.link} className="link">{foot.link2.head}</Link>
                </li>
                <li className="mt-2 mr-2 text-white md:block md:mr-0">
                    <Link href={foot.link3.link} className="link">{foot.link3.head}</Link>
                </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Foot;