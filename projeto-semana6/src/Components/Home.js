import React from 'react';
import CarouselMove from './Carousel';
import Search from './Search';

function Home() {
    return <div>
        <hr/>
        <CarouselMove />
        <hr/>
        <Search />
        <div className='d-flex justify-content-around'>
            <div>Movie 1</div>
            <div>Movie 2</div>
            <div>Movie 3</div>
        </div>

    </div>
}

export default Home