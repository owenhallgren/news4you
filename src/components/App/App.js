import { Component } from 'react'
import {fetchArticles} from '../../apiCalls'
import { Link, Route } from 'react-router-dom'
import ArticleDisplay from "../ArticleDisplay/ArticleDisplay.js"
import ArticleDetails from "../ArticleDetails/ArticleDetails.js"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      filteredArticles: []
    }
  }

  getArticle = (type) => {
    fetchArticles(type)
    .then(data => this.setState({articles: data.results}))
  }

  filterArticles = (input) => {
    const filteredArticles = this.state.articles.filter(articles => articles.title.toLowerCase().includes(input))
    this.setState({ filteredArticles: filteredArticles})
  }

  render() {
    return (
      <>
      <nav className="header">
        <h1>News 4 You</h1>
      </nav>
        <Route exact path="/" render={() =>
          <div className="home-page">
            <h2>Which category do you want to look at today?</h2>
              <Link to={"/articles"} style={{textDecoration: 'none'}}>
                <div className="buttons">
                  <button onClick={(e) => this.getArticle('arts')}>arts</button> 
                  <button onClick={(e) => this.getArticle('automobiles', e)}>automobiles</button>
                  <button onClick={(e) => this.getArticle('books', e)}>books</button>
                  <button onClick={(e) => this.getArticle('business', e)}>business</button>
                  <button onClick={(e) => this.getArticle('fashion', e)}>fashion</button>
                  <button onClick={(e) => this.getArticle('food', e)}>food</button>
                  <button onClick={(e) => this.getArticle('health', e)}>health</button>
                  <button onClick={(e) => this.getArticle('home', e)}>home</button>
                  <button onClick={(e) => this.getArticle('insider', e)}>insider</button>
                  <button onClick={(e) => this.getArticle('magazine', e)}>magazine</button>
                  <button onClick={(e) => this.getArticle('movies', e)}>movies</button>
                  <button onClick={(e) => this.getArticle('nyregion', e)}>nyregion</button>
                  <button onClick={(e) => this.getArticle('arts', e)}>obituaries</button>
                  <button onClick={(e) => this.getArticle('opinion', e)}>opinion</button>
                  <button onClick={(e) => this.getArticle('politics', e)}>politics</button>
                  <button onClick={(e) => this.getArticle('realestate', e)}>realestate</button>
                  <button onClick={(e) => this.getArticle('science', e)}>science</button>
                  <button onClick={(e) => this.getArticle('sports', e)}>sports</button>
                  <button onClick={(e) => this.getArticle('sundayreview', e)}>sundayreview</button>
                  <button onClick={(e) => this.getArticle('technology', e)}>technology</button>
                  <button onClick={(e) => this.getArticle('theater', e)}>theater</button>
                  <button onClick={(e) => this.getArticle('magazine', e)}>magazine</button>
                  <button onClick={(e) => this.getArticle('travel', e)}>travel</button>
                  <button onClick={(e) => this.getArticle('upshot', e)}>upshot</button>
                  <button onClick={(e) => this.getArticle('us', e)}>us</button>
                  <button onClick={(e) => this.getArticle('world', e)}>world</button>
                </div>
              </Link>
          </div>
        } />
        <Route exact path={"/articles"} render={() => 
        <ArticleDisplay articles={this.state.articles} filteredArticles={this.state.filteredArticles} filterArticles={this.filterArticles}/>
        } />
        <Route exact path={"/articles/:title"} render={({match}) => 
        <ArticleDetails title={ match.params.title } articles={ this.state.articles } />
        }/>
      </>
    )
  }
}
export default App;
