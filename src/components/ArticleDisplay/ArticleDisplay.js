import './ArticleDisplay.css'
import ArticleCard from '../ArticleCard/ArticleCard.js'
import FilterForm from '../FilterForm/FilterForm.js'
import { Link } from 'react-router-dom'

const ArticleDisplay = ({articles, filteredArticles, filterArticles}) => {
  let articlesToMap = filteredArticles.length ? filteredArticles : articles
  let articlesToDisplay = articlesToMap.map(article => {
      return (
          <ArticleCard article = {article} />
      ) 
    })

    // const filterArticles = (search) => {
    //   console.log('yesssir')
    //   // let filteredArticles = articlesToDisplay.filter(article => article.title.includes(search) || article.abstract.includes(search))
    //   // if(filteredArticles.length) {
    //   //   articlesToDisplay = filteredArticles
    //   // } 
    // }
    
   return(
      <div className="article-display-container">
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <button className='home-button'>Home</button>
        </Link>
        <FilterForm filterArticles={filterArticles} />
        <div className="article-container">{articlesToDisplay}</div>
      </div>
    )
}


export default ArticleDisplay;

