import { FaMoon, FaSearch } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import {BsSunFill} from 'react-icons/bs'


const ThemeSwitcher=()=>{

    //darkMode
  
    const [theme,setTheme]=useState(null);
    useEffect(()=>{
      if(window.matchMedia("prefer-color-scheme:dark").matches){
        setTheme('dark');
      }else{
        setTheme('light');
      }
    },[]);
    useEffect(()=>{
      if(theme==='dark'){
        document.documentElement.classList.add('dark');
      }else{
        document.documentElement.classList.remove('dark');
      }
    },[theme]);

    const handleThemeSwitcher=()=>{
      setTheme(theme==='dark'?'light':'dark');

    }

  return (
    
        <button className='bg-gray-100 dark:bg-slate-600 p-3 rounded-lg text-yellow-500 dark:text-white ' onClick={handleThemeSwitcher}>
          {theme==='dark'? <FaMoon/>:<BsSunFill/>}
          </button>
    
  );
};
export default ThemeSwitcher;
