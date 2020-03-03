import React from 'react'
import {
    Link,
} from 'react-router-dom'
import './cars.css'

function Index({car}) {
    return (
        <div className="car__Cards">
            <div className="card mb-4 mt-3">
                <img alt="" className="card-img-top m-auto" src={car.img_url}/>
                <hr/>
                <div className="card-body">
                    <Link to={`/detail/${car.id}`} className="car__cards__href card-title"> {car.make} {car.model}</Link>
                    <p className="card-text">{car.summary}</p>
                </div>
            </div>
        </div>
    )
}

export default Index
