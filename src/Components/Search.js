import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Search.css'

import axios from 'axios';

class Search extends Component {
  state = {
    input: '',
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({
      input: value,
    });
  };

  onClick = async (event) => {
    try {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=b46a231393bf1d7236effd3142191445&query=${this.state.input}`
      const response = await axios.get(url)
      const movieId = response.data.results[0].id
      window.location.href = `/movies/${movieId}`

    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (<div className='d-flex justify-content-center m-auto' >
      <Form inline>
        <FormControl onChange={this.handleSearch} value={this.state.input} type="text" placeholder="Search Movie" className="input" id='search-bar' />
        <Button onClick={this.onClick} className='Button' variant="outline-success">Search</Button>
      </Form>
    </div>
    )
  }

}

export default Search;