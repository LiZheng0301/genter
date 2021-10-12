import React from 'react'

const Article = (props)=>{

    return(
        <div>
            <div className="image"><img src={props.img_src} alt="aaa"></img></div>
            <div className="news-content">
            <a className="title" href="http://main.html">{props.news_detail.title}</a>
            <div className="date">{props.news_detail.date}</div>
            <div className="text">{props.news_detail.text}</div>
            </div>
        </div>
    )
}
export default Article