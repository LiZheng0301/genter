import React from 'react'


const SpaceSectionTitle = (props)=>{
    return(
        <div className="space-section-title">
            <div className="number">{props.number}</div>
            <div className="title">{props.title}</div>
        </div>
    )
}
export default SpaceSectionTitle