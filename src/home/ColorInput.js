import React, { useState} from 'react'
 import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
const ColorInput = (props)=>{
    const [color, setColor] = useColor("hex", "#121212")
    const [visible, setVisible]= useState('none')
    return(
        <div>
            <div className="colortype">{props.color} Color</div>
            <input type="text" Value={color.hex} onFocus={()=>setVisible('block')}></input>
          <div style={{display: visible}} onMouseLeave={()=>setVisible('none')}> 
          <ColorPicker width={200} height={200} color={color} onChange={setColor}/>
          
          </div>

        </div>
    )
}

export default ColorInput