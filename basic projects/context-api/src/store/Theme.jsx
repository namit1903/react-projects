import React, { createContext,useState,useEffect } from 'react'

 export const ThemeContext=createContext();//this returns an object of Properties and Consumer
 const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};
 export function ThemeProvider({children}){
const [theme,setTheme]=useState(getTheme);
console.log(theme);


function toggleTheme(){
  const toggle=theme==='dark-theme'?'light-theme':'dark-theme';
  setTheme(toggle);
}

//when theme changes then this useeffect hook function runs which updates the localstorage value
useEffect(() => {
  const refreshTheme = () => {
    localStorage.setItem("theme", theme);
    console.log("useEffect run hua in Theme.jsx")
  };

  refreshTheme();
}, [theme]);

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
  )
 }



// export default ThemeContext
