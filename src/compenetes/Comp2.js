import React, { useRef } from 'react'
import "./Style.css"



export default function Comp2({arr,delf,done}) {

  const taskref=useRef();




  return (
    <div>
      <input type="text" value={arr} className="tt" readOnly /> 
      <input type="button" value='Supprimer' className='sp' onClick={delf}/>
      <input type="button" value="Done"   className='dn '   onClick={done}  />
      
    
    </div>
  )
}
