import React from 'react'
import {
    Link,
} from 'react-router-dom'
import './cars.css'
import Currency from '../Helpers/currency'
import Truncate from '../Helpers/truncate'

function Index({car}) {
    return (
        <div className="car__Cards">
            <div className="card mb-4 mt-3">
                <div className="img-wrapper">
                    <Link to={`/detail/${car.id}`} className="car__cards__href card-title">
                        <img alt="" className="card-img-top m-auto" src={car.img_url}/>
                        <div className="img-overlay">
                            <div className="card-title">
                                {car.make} {car.model}
                            </div>
                        </div>
                    </Link>
                </div>
                <hr className="m-0"/>

                <div className="card-body">
                    <p className="card-title">
                        RRP {Currency.format(car.rrp)}
                    </p>
                    <p className="card-text">{Truncate(car.summary, 80)}</p>
                    <Link to={`/detail/${car.id}`}
                          className="btn btn-block">
                        See more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index
