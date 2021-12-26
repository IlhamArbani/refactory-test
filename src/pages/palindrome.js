import {useState,useRef} from 'react';

const Palindrome = () => {
    const [result,setResult] = useState();

    const inputRef = useRef();


// Palindrome Function
    const polindromCheck = () => {
        const clean = /[\W_]/g;
        const str = inputRef.current.value;
        const low = str.toLowerCase().replace(clean,'');
        const revers = low.split('').reverse().join('');

        console.log(low)

        console.log(revers);

        low === revers ? setResult('true') : setResult('false');
    }

    return (
        <section className="flex items-center flex-col">
            <div className='flex flex-col items-center border-2 rounded-md shadow-md p-9 mt-12'>
                <h1 className="text-xl font-bold mb-4">Palindrome Checker</h1>
                <input type='text' ref={inputRef} className="border-2 border-gray-300 rounded-lg mb-2 px-2"/>
                <button onClick={polindromCheck}  className="hover:shadow-md border-2 border-gray-300 rounded-lg px-5 mb-4">Check</button>
                <h1 className="text-xl font-bold mb-2">Output :</h1>
                <h1 className="text-xl font-bold">{result}</h1>
            </div>
        </section>
    )
}

export default Palindrome