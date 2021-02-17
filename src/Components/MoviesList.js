import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './MoviesList.css'

import CarouselMove from './Carousel'

class MoviesList extends Component {
    state = {
        movies: [],
        randomMovieIdx: [],
        sortedMovies: [],
    }

    setRandomIdx = (arr) => {
        let mySet = new Set()

        while (mySet.size < 5) {
            mySet.add(Math.floor(Math.random() * arr.length))
        }

        this.setState({ randomMovieIdx: [...mySet] })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b46a231393bf1d7236effd3142191445&language=en-US')
            this.setState({
                movies: [...response.data.results],
            })
            this.setRandomIdx(this.state.movies)

            this.setState({
                sortedMovies: [
                    this.state.movies[this.state.randomMovieIdx[0]],
                    this.state.movies[this.state.randomMovieIdx[1]],
                    this.state.movies[this.state.randomMovieIdx[2]],
                    this.state.movies[this.state.randomMovieIdx[3]],
                    this.state.movies[this.state.randomMovieIdx[4]]
                ]
            })


        } catch (err) {
            console.error(err);
        }

    }

    render() {
        return <div id='moviesList' className='list-group list-group-horizontal'>
            {this.state.sortedMovies.map((movie) => (
                <Link style={{ textDecoration: 'none' }} to={`/movies/${movie.id}`} key={movie.id}>
                    <div 
                        className="card-group d-flex list-group-item list-group-item-action"
                        style={{ maxHeight: '90vh' }}
                    >
                        <div className="imageContainer mr-5 d-flex align-items-center">
                            <img
                                style={{ width: '150px', height: 'auto' }}
                                src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                                alt={`${movie.title}`}
                            />
                        </div>
                        <div className="beerDetails d-flex flex-column justify-content-center m-2">
                            <h2><strong>{movie.title}</strong></h2>
                            <p><strong>Rating: </strong>{movie.vote_average}</p>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div>
    }
}

export default MoviesList;