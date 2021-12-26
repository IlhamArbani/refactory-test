import {useState} from 'react';

import logo from '../assets/kotakode.svg';
import eye from '../assets/eye.svg';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.svg';
import block from '../assets/block71.svg';
import linkedIn from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import hidden from '../assets/hidden.png'
import react from 'react';
// import startup from '../assets/st.svg';

const MiniApps = () => {
    const [showPassword,setShowPassword] = useState(false);

    const showPasswordHandler = (e) =>{
        e.preventDefault()
        setShowPassword(!showPassword);
    }
    return (
        <section>
            {/* START:Header */}
            <header className='p-5 sticky md:px-24 border-b-4 border-orange-400'>
                <div className='flex justify-between items-center'>
                    <div className='w-32' >
                        <img src={logo}/>
                    </div>
                    {/* START: Navigation */}
                    <nav className='hidden md:block'>
                        <ul className='flex'>
                            <li>
                                <a href='#' className='text-xl hover:border-green-500 border-white border-2 rounded-md px-4 py-1'>Tentang</a>
                            </li>
                            <li>
                                <a href='#' className='text-xl hover:border-green-500 border-white border-2 rounded-md px-4 py-1'>Produk</a>
                            </li>
                            <li>
                                <a href='#' className='text-xl hover:border-green-500 border-white border-2 rounded-md px-4 py-1'>FAQ</a>
                            </li>
                            <li>
                                <a href='#' className='text-xl hover:border-green-500 border-white border-2 rounded-md px-4 py-1'>Events</a>
                            </li>
                            <li>
                                <a href='#' className='text-xl hover:border-green-500 border-white border-2 rounded-md px-4 py-1'>Partnership</a>
                            </li>
                            <li>
                                <a href='#' className='text-xl hover:border-green-500 border-white border-2 rounded-md px-4 py-1'>Academy</a>
                            </li>
                        </ul>
                    </nav>
                    {/* END: Navigation */}

                    <div className='hidden md:flex'>
                        <button className=' text-green-500 px-12 border-2 py-2 rounded-md'>Masuk</button>
                        <button className='px-12 border-2 py-2 bg-green-500 text-white ml-4 rounded-md'>Daftar</button>
                    </div>

                    <button className='text-green-500 text-xl px-4 py-1 border-2 focus:border-green-500 rounded-md md:hidden'>&#9776;</button>
                </div>
            </header>
            {/* END: Header */}

            {/* START: Main */}
            <main className='flex justify-center mt-28'>
                <div className='w-96 px-3'>
                    <div className='flex justify-center mb-10'>
                        <img className='w-56 h-15' src={logo}/>
                    </div>
                    <form className='flex flex-col mb-2'>
                        <label>Email /  Username</label>
                        <input className='px-2 border-2 rounded-lg border-gray-400 mb-4 h-8'/>
                        <label>Password</label>
                        <div className='flex w-full mb-2 items-center'>
                            <input className='px-2 flex-1 border-2 rounded-lg border-gray-400 h-8' type={showPassword ? 'text' : 'password'}/>
                            <button onClick={(e) => showPasswordHandler(e)} className='border-2 border-gray-400 p-1 rounded-md ml-2'>
                                <img className='w-6 h-6' src={showPassword ? hidden : eye}/>
                            </button>
                        </div>
                        <a className='mb-2 text-right text-blue-500' href='#'>Lupa Password?</a>
                        <button type='submit' className='bg-green-500 text-white rounded-lg py-2'>Masuk</button>
                    </form>
                    <p className='text-center mb-3'>atau masuk dengan</p>
                    <div className='flex justify-center mb-2'>
                        <button className='border-2 rounded-md p-2 shadow-md'>
                            <img className='w-6 h-6'  src={google}/>
                        </button>
                        <button className='border-2 rounded-md p-2 ml-4 shadow-md'>
                            <img className='w-6 h-6' src={facebook}/>
                        </button>
                        <button className='border-2 rounded-md p-2 ml-4 shadow-md'>
                            <img className='w-6 h-6'  src={github}/>
                        </button>
                    </div>
                    <p className='text-center'>Belum Memiliki Akun? <a className='text-blue-500' href='#'>Daftar</a></p>
                </div>
            </main>
            {/* END: Main */}


            {/* START: Footer */}
            <footer className='bg-slate-700 pt-24 pb-4 px-5 md:px-24 mt-8'>
                <div className='md:grid md:grid-cols-4'>
                    <div className='flex flex-col items-center md:block mb-12'>
                        <h2 className='text-slate-300 font-bold text-sm mb-2 md:text-lg'>BAGIAN DARI :</h2>
                        <img src={block}/>
                        {/* <img src={startup}/> */}
                    </div>
                    <div className='mb-12'>
                        <h2 className='text-slate-300 font-bold text-sm mb-2 text-center md:text-left md:text-lg'>PRODUK</h2>
                        <nav>
                            <ul className='flex flex-col items-center md:block'>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Pertanyaan</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Blog</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Pengguna</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Events</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Partnership</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='mb-12'>
                        <h2 className='text-slate-300 font-bold text-sm mb-2 text-center md:text-left md:text-lg'>PERUSAHAAN</h2>
                        <nav>
                            <ul className='flex flex-col items-center md:block'>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>About</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>FAQ</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Rules</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Legal</a>
                                </li>
                                <li>
                                    <a href='#' className='text-slate-200 text-sm mb-2 md:text-lg'>Partnership</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='mb-12'>
                        <h2 className='text-slate-300 font-bold text-sm mb-2 text-center md:text-left md:text-lg'>HUBUNGI KAMI</h2>
                        <p className='text-slate-200 text-sm mb-2 text-center md:text-left md:text-lg'>pertanugraha@kotakode.com</p>
                        <div className='flex justify-center md:justify-start'>
                            <a href='#' className='mr-2'>
                                <img className='w-6 h-6' src={linkedIn}/>
                            </a>
                            <a href='#' className='mr-2'>
                                <img className='w-6 h-6' src={instagram}/>
                            </a>
                            <a href='#' className='mr-2'>
                                <img className='w-6 h-6' src={twitter}/>
                            </a>
                            <a href='#'>
                                <img className='w-6 h-6' src={facebook}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p  className='text-slate-200 text-sm md:text-lg'>PT.Kota Digital Nusantara</p>
                    <p  className='text-slate-200 text-sm md:text-lg'>Copyright 2020 Kotakode. All rights reserved</p>
                    <p  className='text-slate-200 text-sm md:text-lg'>Made with ❤️   in 🇮🇩</p>
                </div>
            </footer>
            {/* END: Footer */}
        </section>
    )
}

export default MiniApps;