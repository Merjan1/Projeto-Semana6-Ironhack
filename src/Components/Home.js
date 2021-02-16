import React from 'react'

import MoviesList from './MoviesList'

function Home() {
    return <div>
        <MoviesList />
        <div className='d-flex justify-content-around'>
            <div>Movie 1</div>
            <div>Movie 2</div>
            <div>Movie 3</div>
        </div>

    </div>
}

export default Home