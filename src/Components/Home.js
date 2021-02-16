import React from 'react'

import MoviesList from './MoviesList'
import NavBar from './NavBar'
import CarouselMove from './Carousel'
import Search from './Search'


function Home() {
    return <div>
        <NavBar />
        <hr />
        <CarouselMove />
        <Search />
        <MoviesList />
    </div>
}

export default Home