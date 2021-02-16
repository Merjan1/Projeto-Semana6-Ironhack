import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import axios from 'axios';

class CarouselMove extends React.Component {

  state = {
    poster_path: '',
    id: '',
    title: '',
    moviesStort: [],
    ranIdxMovies: [],
    moviesRan: [],
  }

  setIdxRandom = (arr) => {
    let mySet = new Set()

    while (mySet.size < 3) {
      mySet.add(Math.floor(Math.random() * arr.length))
    }

    this.setState({ ranIdxMovies: [...mySet] })
  }


  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b46a231393bf1d7236effd3142191445`
      )
      this.setState({ moviesRan: [...response.data.results] })
      this.setIdxRandom(this.state.moviesRan)

      this.setState({
        moviesStort: [
          this.state.movies[this.state.ranIdxMovies[0]],
          this.state.movies[this.state.ranIdxMovies[1]],
          this.state.movies[this.state.ranIdxMovies[2]],
        ]
      })


    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className='w-50 m-auto p-25'>
        <Carousel className='text-right'>
          <Carousel.Item>
            <img
              className="img"
              src={`http://image.tmdb.org/t/p/w185/${this.state.poster_path}`}
              alt={`${this.state.title}`}
            />
            <Carousel.Caption>
              <h3>{this.state.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img"
              src={`http://image.tmdb.org/t/p/w185/${this.state.poster_path}`}
              alt={`${this.state.title}`}
            />

            <Carousel.Caption>
              <h3>{this.state.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img"
              src={`http://image.tmdb.org/t/p/w185/${this.state.poster_path}`}
              alt={`${this.state.title}`}
            />

            <Carousel.Caption>
              <h3>{this.state.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default CarouselMove;