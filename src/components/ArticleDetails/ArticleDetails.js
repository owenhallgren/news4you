import "./ArticleDetails.css"
import { Link } from 'react-router-dom'


const ArticleDetails = ({title, articles}) => {
  let articleToDisplay = articles.find(article => article.title === title)
  return (
    <div className="details-container">
      <h1>{articleToDisplay.title}</h1>
      <h2>{articleToDisplay.abstract}</h2>
      <a href={articleToDisplay.short_url} className="full-story">Full Story</a>
      <img src={articleToDisplay.multimedia[0].url} className="photo" alt="related to article"/>
      <Link to={'/articles'} style={{textDecoration: 'none'}}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default ArticleDetails