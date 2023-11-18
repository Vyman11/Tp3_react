import React, { useState } from 'react'
import './Style.css' 
import Comp2 from './Comp2'
import {v4 as uuidv4 } from 'uuid';

export default function Comp1() {

const [tasks,settasks]=useState([
  { id:uuidv4() ,name:'football'},
  { id:uuidv4() ,name:'tenis'},
  { id:uuidv4() ,name:'baskeball'},
])



const [task,settask]=useState('');

const addtask=()=>{

    let ntasks=[...tasks] ;
    let ntask = {} ; 
    ntask.id=uuidv4();
    ntask.name=task;
    ntasks.push(ntask); 
    settasks(ntasks);

}


const deletetask=(idp)=>{

  let ntasks=tasks.filter((el)=>{

    return el.id!=idp
  })

  settasks(ntasks);
}

const donetask = (id)=>{
  let N = [...tasks]
  for(let i=0;i< N.length;i++){
    if(N[i].id === id){
      N[i].name = 'Done' 
      document.getElementsByClassName("tt")[i].style.backgroundColor = "green"; 
    }
  }
  settasks(N);
}

  return (
    <div className='chi'>
  <h1>TO DO LIST</h1>
      
  <form >  
    <input type="text"  value={task} onChange={(e)=>{settask(e.target.value)}} /> <br />
    <input type="button" value='ajouter'  className='ajt' onClick={addtask}/>
         </form>
      
          <br /> <br />

          {tasks.map((el)=>{
            return <li key={el.id}><Comp2  delf={()=>deletetask(el.id)}  arr={el.name} done={()=>donetask(el.id)}/> </li>
          })

          }
    </div>
  )
}