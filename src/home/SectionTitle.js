import React from 'react'


const SectionTitle = (props)=>{
    return(
        <div className="team-section-title">
            <div className="number" style={{opacity: props.NumberOpacity}}>{props.number}</div>
            <div className="title" style={{color: props.TitleColor}}>{props.title}</div>
        </div>
    )
}
export default SectionTitle