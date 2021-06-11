import './ArticleCard.css'
import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
  return (
    <Link to={`/articles/${article.title}`} style={{textDecoration:'none'}}>
      <div className="article-card">
      <h4>{article.title}</h4>
      </div>
    </Link>
  )
}

export default(ArticleCard)