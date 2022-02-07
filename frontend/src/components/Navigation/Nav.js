import React,{useEffect} from 'react';
import Toggle from '../ToggleTheme/toggle';
import {AiOutlineBlock} from 'react-icons/ai';

let ToggleButton = function(){
   
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

}


const Navbar = () => {
    
    useEffect(() => {
        ToggleButton()
    }, []);
    
  return (

    <div>
        <nav className="bg-gray-100 dark:bg-slate-900 dark:shadow-md">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">

            <div className="flex space-x-4">
            
                <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    
                   <AiOutlineBlock className='text-2xl dark:text-white'/> <span className="font-bold dark:text-white">Blockchain<sup>Series</sup></span>
                </a>
                </div>

                <div className="hidden md:flex items-center space-x-1">
       
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-white">Simple</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-white">PoS</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-white">Persistence</a>
                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-white">Networking</a>
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
                <a href="" className="py-5 px-3 dark:text-white">Login</a>
                <a href="" className="py-2 px-3 bg-[#3d4f7c]  hover:bg-gray-600 text-white hover:text-white rounded transition duration-300">Signup</a>
                <a className='pl-5'><Toggle/></a>
            </div>

            <div className="md:hidden flex items-center">
                <button className="mobile-menu-button dark:text-white">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>

            </div>
        </div>


        <div className="mobile-menu hidden md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-[#0d121f] dark:text-white">Simple</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-[#0d121f] dark:text-white">PoS</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-[#0d121f] dark:text-white">Persistence</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-[#0d121f] dark:text-white">Networking</a>
            <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200  dark:hover:bg-[#0d121f] dark:text-white">Login</a>
            <a href="" className=" block py-2 m-4 px-4 text-sm  dark:text-white bg-[#576b9c]  hover:bg-gray-600 text-white hover:text-white rounded transition duration-300">Signup</a>
        </div>
        </nav>

    

    </div>
  );
};

export default Navbar;