import React from 'react'

function Home() {
    return <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide d-flex justify-content-center" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./Images/Joker.jpeg" className="d-block w-100" alt="joker" />
                </div>
                <div className="carousel-item">
                    <img src="./Images/theJudge.jpeg" className="d-block w-100" alt="the Judge" />
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>


        <div className='d-flex justify-content-around'>
            <div>Movie 1</div>
            <div>Movie 2</div>
            <div>Movie 3</div>
        </div>

    </div>
}

export default Home