import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import axios from 'axios';


class CarouselMove extends React.Component {
  
  state = {
    poster_path: '',
    id: '',
    title: '',
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(
      `https://api.themoviedb.org/3/collection/{collection_id}/images?api_key=b46a231393bf1d7236effd3142191445&language=en-US`
    )
      this.setState({ ...response.data});
    } catch(err){
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
      src={this.state.poster_path}
      alt={`${this.state.title}`}
    />
    <Carousel.Caption>
      <h3>{this.state.title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      //src={`http://image.tmdb.org/t/p/w185/${this.state.poster_path}`}
      src={this.state.poster_path}
      alt={`${this.state.title}`}
    />

    <Carousel.Caption>
      <h3>{this.state.title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src={this.state.poster_path}
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