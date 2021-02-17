import axios from 'axios';
import React from 'react';
import CarouselMove from './Carousel';
import './MovieDetail.css';

import NavBar from './NavBar';

class MovieDetail extends React.Component {
    state = {
        original_title: '',
        title: '',
        poster_path: '',
        original_title: '',
        release_date: '',
        overview: '',
        popularity: '',
        id: '',
        vote_average: '',
        poster_path: ''
    }

    async componentDidMount() {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b46a231393bf1d7236effd3142191445`
            )
            this.setState({ ...response.data })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div id='movieDetail' className="d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
                    <div className="w-25 d-flex flex-column justify-content-center align-items-center mb-3">
                        <img style={{ width: '250px', height: "auto" }} src={`http://image.tmdb.org/t/p/w185/${this.state.poster_path}`} alt={`${this.state.title}`} />
                    </div>
                    <div className='w-75 d-flex justify-content-around align-items-center'>
                        <h2 className='ml-7'>{this.state.title}</h2>
                    </div>
                    <div className='w-75 d-flex justify-content-around align-items-center'>
                        <h6><i className='ml-7'>{this.state.tagline}</i></h6>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                        <p className="w-75 m-0"><strong>Original Title: </strong>{this.state.original_title}</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                        <p className="w-75 m-0"><strong>Release Date: </strong>{this.state.release_date}</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                        <p className="w-75 m-0"><strong>Runtime: </strong>{this.state.runtime} min</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                        <p className="w-75 m-0"><strong>Rating: </strong>{this.state.vote_average}</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                        <p className="w-75 m-0"><strong>Popularity: </strong>{this.state.popularity}</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mb-2'>
                        <p className="w-75 m-0"><strong>Overview: </strong>{this.state.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail;