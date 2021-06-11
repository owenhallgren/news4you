import './ArticleDisplay.css'
import ArticleCard from '../ArticleCard/ArticleCard.js'
import FilterForm from '../FilterForm/FilterForm.js'

const ArticleDisplay = ({articles}) => {
  let articlesToDisplay = articles.map(article => {
      return (
          <ArticleCard article = {article} />
      ) 
    })

    const filterArticles = (e, search) => {
      e.preventDefault()
      console.log('yesssir')
      // let filteredArticles = articlesToDisplay.filter(article => article.title.includes(search) || article.abstract.includes(search))
      // if(filteredArticles.length) {
      //   articlesToDisplay = filteredArticles
      // } 
    }
    
   return(
      <>
        <FilterForm filterArticles={filterArticles} />
        <div className="article-container">{articlesToDisplay}</div>
      </>
    )
}


export default ArticleDisplay;

