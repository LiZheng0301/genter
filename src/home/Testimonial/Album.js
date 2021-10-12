import React from 'react'

const Album =(props)=>{
    return(
        <div className="album">
            <img src={props.img_src} alt=""/>
            <div className="information"> 
                <div className="text">
                When asked, “If you could wish for one thing only, what would that wish be?” almost everyone; from beauty pagent contestants, to politicians, to religious leaders, to children, to the average person on the street states, “Peace On Earth” or “An end to all wars”. 
                </div>
                <div className="author">Matilda Hardy</div>
                <div className="designation">Creative Director</div>
            </div>
        </div>
    )
}
export default Album