import {useState,useRef} from 'react';

const ReverseWords = () => {
    const [result,setResult] = useState();
    const inputText = useRef();


// Reverse Word Function
    const clickHandler = () => {
        const str= inputText.current.value.toLowerCase().split(' ');

        const reverse = str.map(item => {
            return item.split('').reverse().join('')
        })

        const revWord = reverse.join(' ');

        setResult(revWord);
    }

    return (
        <section className="flex items-center flex-col">
            <div className='flex flex-col items-center border-2 rounded-md shadow-md p-9 mt-12'>
                <h1 className="text-xl font-bold mb-4">Reverse Words</h1>
                <input ref={inputText} type='text' className="border-2 border-gray-300 px-2 mb-2 rounded-md"/>
                <button onClick={clickHandler} className="mb-4 hover:shadow-md border-2 border-gray-300 rounded-lg px-5">Reverse</button>
                <h1 className="text-xl font-bold mb-2">Output :</h1>
                <h1 className="text-xl">{result}</h1>
            </div>
        </section>
    )
}

export default ReverseWords;