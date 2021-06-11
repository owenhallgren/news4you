import { Component } from 'react'
import './FilterForm.css'


class FilterForm extends Component {
  constructor({filterArticles}) {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = e =>  {
        this.setState({ [e.target.name]: e.target.value })
        this.props.filterArticles(e.target.value)
    }

  render() {
    return(
      <form>
        <input 
            type='text'
            placeholder='Search'
            name='search'
            value={this.state.search}
            onChange={e => this.handleChange(e)}
        />
        {/* <button className="search-button" onclick={(e) => this.props.filterArticles(e, this.state.search)}>Search</button> */}
      </form>
    )
  }
};

export default FilterForm;