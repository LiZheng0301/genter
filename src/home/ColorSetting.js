import React, { useState } from 'react'
import {MdSettings} from 'react-icons/md'
import ColorInput from './ColorInput'
const ColorSetting = ()=>{
    const [visible, setVisible]= useState(false)
const showColorPalate = ()=>{
    setVisible(!visible)
}

    return(
        <div className="settingcolorcontainer" style={{left: visible? '0': '-250px'}}>
            <div className="palateheader">
            <div className="title">Choose your color</div>
            <button className="settingbutton" onClick={showColorPalate}>
                <MdSettings size={20}/>
            
            </button>
            
            </div>
            <div className="palatecontent">
             <ColorInput color="primray"/>
             <ColorInput color="secondary"/>
            </div>
        </div>
    )
}

export default ColorSetting