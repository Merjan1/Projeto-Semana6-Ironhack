import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

class CarouselMove extends React.Component {

  state = {
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=b46a231393bf1d7236effd3142191445&language=en-US&page=1-5`
      )
      this.setState({ moviesRan: [...response.data.results] })
      this.setIdxRandom(this.state.moviesRan)

      this.setState({
        moviesStort: [
          this.state.moviesRan[this.state.ranIdxMovies[0]],
          this.state.moviesRan[this.state.ranIdxMovies[1]],
          this.state.moviesRan[this.state.ranIdxMovies[2]],
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
          {this.state.moviesStort.map((movie) => (
            <Carousel.Item interval={3000}>
              <Link style={{ textDecoration: 'none' }} to={`/movies/${movie.id}`} key={movie.id}>
                <img
                  className="img"
                  src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={`${movie.title}`}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default CarouselMove;