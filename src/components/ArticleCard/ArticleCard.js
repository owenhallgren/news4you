import './ArticleCard.css'


const ArticleCard = ({article}) => {
  return (
    <div className="article-card">
      <h4>Title {article.title}</h4>
      <h5>{article.abstract}</h5>
      {/* <a href={article.short_url}>link text</a> */}
      {/* <img src={article.mulitmedia[0].url}/>
      <img src={article.mulitmedia[1].url}/> */}
    </div>
  )
}

export default(ArticleCard)