import "./ArticleDetails.css"

const ArticleDetails = ({title, articles}) => {
  let articleToDisplay = articles.find(article => article.title === title)
  return (
    <div>
      <h1>{articleToDisplay.title}</h1>
      <h2>{articleToDisplay.abstract}</h2>
      <a href={articleToDisplay.short_url}>Full Story</a>
      <img src={articleToDisplay.multimedia[0].url} className="photo"/>
    </div>
  )
}

export default ArticleDetails