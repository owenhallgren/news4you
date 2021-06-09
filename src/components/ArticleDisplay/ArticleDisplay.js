import './ArticleDisplay.css'
import ArticleCard from '../ArticleCard/ArticleCard.js'

const ArticleDisplay = ({articles}) => {
  let articlesToDisplay = articles.map(article => {
      return (
        <ArticleCard article = {article} />
      ) 
    })
    
   return(
      <div className="article-container">{articlesToDisplay}</div>
    )
}


export default ArticleDisplay;

