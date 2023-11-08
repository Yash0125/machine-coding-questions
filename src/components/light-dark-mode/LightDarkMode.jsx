import React, { useState } from 'react';
import './lightDarkMode.css'

const LightDarkMode = () => {
    const [theme,setTheme]=useState(true)
  return (
    <div className='container'>
    <div className={theme ? 'light' : 'dark'}>
    <h1 className='lightDarkMode-header'>LightDarkMode</h1>
      <button className='toggle-btn' onClick={()=>setTheme(!theme)}>Toggle mode</button>
    </div>
    </div>
  )
}

export default LightDarkMode
