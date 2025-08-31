import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../Lib/Util";

export const ThemeToggle = ()=>{
    const [isDarkmode,setisDarkMode] = useState(false);
useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")
    if(storedTheme === "dark"){
        setisDarkMode(true)
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
        setisDarkMode(false);
    }
},[])

   const toogleTheme =()=>{
    if(isDarkmode){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light");
        setisDarkMode(false);
    }else{
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark");
        setisDarkMode(true);
    }
   }

    return <button onClick={toogleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-80 p-2 rounded-full transition-colors duration-300 ",
     "focus:outline-hidden"   
    )}> 
        {isDarkmode ?( <Sun className="h-6 w-6 text-yellow-100"/>)
        :(<Moon className="h-6 w-6 text-blue-900"/>)}</button>
}