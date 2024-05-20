import React, { useState } from 'react'
import style from "./App.module.css"
import Display from './components/Display'
import Buttons from './components/Buttons';


const App = () => {
  const[calVal,setCalVal]=useState("");

  const onButtonClick=(buttonText)=>{
     
    if(buttonText=== "C"){
       setCalVal("");
    }
    else if  (buttonText === "=" ) {
       const result = eval(calVal);
       setCalVal(result)
      }
     else{
      const newDiplayValue= calVal+ buttonText;
      console.log(buttonText)
      setCalVal(newDiplayValue)
    }
  }
  
  return (
    <div className={style.calculator}>
    <Display displayValue={calVal}/>
    <Buttons onButtonClick={onButtonClick}/>
    </div>
      
    
  )
}

export default App
