import "./part2.scss";

import Navbar from "../navbar/Navbar";
import React from "react";
import {useState} from "react";

export default function Part2() {
    const[selected, setSelected] = useState("fresh");

    const toggleTab = (index) => {
        setSelected(index);
    };
    
    const list=[
        {
            id:"fresh",
            title:"FRESH",
        },
        {
            id:"hot",
            title:"HOT",
        },
        
        
    ];
  return (
    <div className="lists" id='lists'>
            
            <ul>
               {list.map((item) => (
                   <Navbar title={item.title} 
                   active={selected===item.id}
                   setSelected={setSelected}
                   
                   id={item.id}
                   />
               )
               )}
 
            </ul>
            <div className="line">
                <span className="line1"></span>
            </div>
        </div>
  )
}
