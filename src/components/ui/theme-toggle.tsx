"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'


type Props = {}

const ThemeToggle = (props: Props) => {
    const {setTheme,theme} = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true);
    },[])

    if(!mounted){
        return null;
    }
  return ( 
    <div className='cursor-pointer' onClick={()=>setTheme(theme == 'light' ? 'dark' : 'light')}>
        {
            theme === 'light' ? (<Moon className='h-5 w-h text-black' />) : (<Sun className='h-5 w-h text-white' color='white'/>)
        }

    </div>
  )
}

export default ThemeToggle