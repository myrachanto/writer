import Link from "next/link";
// import { useState } from "react";
import { host2 } from "../../utils/myrconstants"
export const getStaticProps = async (context) => {
  const res = await fetch(`${host2}/api/maswali?page=1&limit=50&search=`)
  const data =  await res.json()
  console.log("===============", data)
  return {
      props: {maswali: data.maswali.docs,},
      revalidate: 10,
  }
}
const Questions = ({maswali}) => {
    // const [questions, setQuestions] = useState([
    //     {id: 1, name: "question 1", url: "question-1", description: "the description of question 1"},
    //     {id: 2, name: "question 2", url: "question-2", description: "the description of question 2"},
    //     {id: 3, name: "question 3", url: "question-3", description: "the description of question 3"}
    // ])
    return ( 
        <>
        {maswali.length !== 0 && 
        <div className="mt-32  max-w-7xl mx-6  2xl:mx-auto">
            {maswali && maswali.map(question =>(
                <div key={`/questions/${question.url}`} className="m-2 p-2 rounded-md shadow-md">
                    <Link href="questions/url"><div className="text-xl py-2 cursor-pointer text-blue-700">{question.topic}</div></Link>
                    <div className="text-lg peer">{question.question.substring(0, 250) + '...'}</div>
                </div>
            ))}
        </div> || 
        <div className=" h-96 flex justify-center items-center text-3xl text-blue-700">There are no questions at the moment!</div>
}
        </>

     );
}
 
export default Questions;