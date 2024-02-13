import React, { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";


const DarklightMode = () => {
  const [theme,setTheme]=useState(false);
  const handleClick=()=>{
      setTheme(!theme)
  }
  useEffect(()=>{
      if(theme===true){
          document.body.classList.add("dark");
      }
      else{
          document.body.classList.remove("dark")
      }
  })
return (
  <div className='dark_mode'>
  <a className='drak_mode_button' onClick={handleClick}>{theme?<LuSunMoon className="LuSunMoon" />:<LuMoonStar className="LuSunMoon" />
}</a>
  </div>
)
}

export default DarklightMode;