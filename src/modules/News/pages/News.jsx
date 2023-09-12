import React from 'react'
import news from './../components/News/const/news.js'
import Article from '../components/article/article.jsx'
import './News.css'
import HeroNews from '../components/hero/Hero.jsx'


function News() {
  return (
    <>
    <HeroNews />
    <div className='rm_container_news'>
      {news.map(({title1 ,desc}, index) => (
        <div className='rm_container_news' key={index}>
     <Article 
     title = {title1}
     desc = {desc}
     /> 
    </div>
      ))}
    </div>
    </>
  )
}

export default News