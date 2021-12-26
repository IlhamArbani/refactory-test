import {useState, useRef} from 'react';

const FizzBuzz = () => {
    const [result,setResult] = useState([]);
    const inputNum = useRef();

// FizzBuzz Function
    const clickHandler = () => {
        const list = [];
        for(let i = 1;i<=parseInt(inputNum.current.value);i++){
            
            if(i%3 === 0 && i%5 === 0){
                list.push('FizzBuzz');
            }else if(i%3 === 0 ){
                list.push('Fizz');
            }else if(i%5 === 0){
                list.push('Buzz');
            }else{
                list.push(i)
            }
        }

        setResult(list)
    }

    return(
        <section className="flex items-center flex-col">
            <div className='flex flex-col items-center border-2 rounded-md shadow-md p-9 mt-12'>
                <h1 className="text-xl font-bold mb-4">FizzBuzz</h1>
                <input ref={inputNum} type='number' className="mb-2 px-2 rounded-md border-2 border-gray-300"/>
                <button onClick={clickHandler} className="mb-4 hover:shadow-md border-2 border-gray-300 rounded-lg px-5">Check</button>
                <h1 className="text-xl font-bold mb-2">Output :</h1>
                <h1 className="text-xl font-bold">[{result.join()}]</h1>
            </div>
        </section>
    )
}

export default FizzBuzz;