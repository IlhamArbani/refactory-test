import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <section className='flex justify-center'>
            <div className='border-2 rounded-md shadow-md p-9 mt-12'>
                <h1 className='text-xl font-bold mb-2'>Logic Test</h1>
                <div className='flex flex-col'>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md mb-2' to='/palindrome'>Palindrome</Link>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md mb-2' to='/leap-year'>Leap Year</Link>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md mb-2' to='/reverse-word'>Reverse Words</Link>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md mb-2' to='/fibonacci'>Nearest Fibonacci</Link>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md' to='/fizzbuzz'>FizzBuzz</Link>
                </div>
                <h1 className='text-xl font-bold mt-4 mb-2'>JSON manipulation</h1>
                <div className='flex flex-col'>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md' to='/json-manipulation'>JSON manipulation</Link>
                </div>
                <h1 className='text-xl font-bold mt-4 mb-2'>Mini App</h1>
                <div className='flex flex-col'>
                    <Link className='border-2 rounded-md font-bold text-center hover:shadow-md' to='/app'>App</Link>
                </div>

            </div>
        </section>
    )
}

export default Home