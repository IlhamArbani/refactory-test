import {useRef, useState} from 'react';

const Fibonacci = () => {
    const [result,setResult] = useState();
    const inputNumbers = useRef();

// Nearest Fibonaci Function
    const nearestFibo = () => {
        const numbers = inputNumbers.current.value.split(',');
        let num = 0;

        numbers.forEach(item => {
            num += parseInt(item)
        });

        let first = 0;
        let second = 1;

        let third = first + second;

        if(num == 0){
            setResult(0);

            return;
        }

        while(third < num){
            first = second;
            
            second = third;

            third= first+second
        }

        if(third == num){
            setResult(0);
            return;
        }

        if(third > num){
            const higher = third - num;
            
            const lower = num - second;

            higher > lower ? setResult(lower) : setResult(higher);

            return;
        }
    }

    return(
        <section className="flex items-center flex-col">
            <div className='flex flex-col items-center border-2 rounded-md shadow-md p-9 mt-12'>
                <h1 className="text-xl font-bold mb-4">Nearest Fibonacci</h1>
                <p className='mb-2'>input multiple number with ',' as separator</p>
                <input ref={inputNumbers} type='text' className="px-2 rounded-md mb-2 border-2 border-gray-300"/>
                <button onClick={nearestFibo} className="hover:shadow-md mb-4 border-2 border-gray-300 rounded-lg px-5">Check</button>
                <h1 className="text-xl font-bold mb-2">Output :</h1>
                <h1 className="text-xl font-bold">{result}</h1>
            </div>
        </section>
    )
}

export default Fibonacci;