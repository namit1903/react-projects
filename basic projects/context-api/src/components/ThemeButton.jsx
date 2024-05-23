import React ,{useContext}from 'react'
import { ThemeContext } from '../store/Theme'
function ThemeButton() {

const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <button className={`btn btn-theme`} onClick={toggleTheme}>{theme}</button>
  )
}

export default ThemeButton
