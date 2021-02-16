import React from 'react';
import MoviesList from './MoviesList';
import CarouselMove from './Carousel';
import Search from './Search'

function Home() {
    return <div>
        <CarouselMove />
        <hr />
        <Search />
        <MoviesList />

    </div>
}

export default Home