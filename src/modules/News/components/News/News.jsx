import React from 'react'
import Article from '../article/article'
import INFO from "../../const/news"

const Inf = INFO
const News = () => {

  return (
        <>
      
     { Inf.map((news, index) => {
    <div className='rm_container_news' key={index}>
     <Article 
     title = {news.title}
     desc = {news.desc}
     
     /> 
    </div>
})}
    </>
    )

}

export default News
