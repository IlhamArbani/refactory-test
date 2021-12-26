import { useState,useRef } from "react"

const LeapYear = () => {

    const [listYear,setListYear] = useState([]);
    const inputBegin = useRef();
    const inputEnd = useRef();


// Leap Year Function
    const clikHandler = () => {
        const list = [];

        let begin = parseInt(inputBegin.current.value);
        let end = parseInt(inputEnd.current.value);

        for(let i = begin;i <= end;){
            list.push(i);
            i = i + 4;
        }

        setListYear(list);
    }


    return(
        <section className="flex items-center flex-col">
            <div className='flex flex-col items-center border-2 rounded-md shadow-md p-9 mt-12'>
                <h1 className="text-xl font-bold mb-4">Leap Year</h1>
                <label>Year Begin</label>
                <input type='number' ref={inputBegin} className="border-2 border-gray-300 rounded-md px-2"/>
                <label>End Year</label>
                <input type='number' ref={inputEnd} className="border-2 border-gray-300 rounded-md px-2 mb-2"/>
                <button onClick={clikHandler} className="hover:shadow-md border-2 border-gray-300 rounded-lg px-5">Enter</button>
                <h1 className="text-xl font-bold mt-4">Output:</h1>
                <p className="mt-2">
                    {listYear.join()}
                </p>
            </div>
        </section>
    )
}

export default LeapYear