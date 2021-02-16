import React from 'react'

import MoviesList from './MoviesList'
import Navbar from './Navbar'

function Home() {
    return <div>
        <Navbar />
        <MoviesList />
        <div className='d-flex justify-content-around'>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>
}

export default Home