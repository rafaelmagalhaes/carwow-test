import React from 'react'
import Currency from "../Helpers/currency";
import './singlecar.scss'

function Index({car}) {
    return (
        <div className="row  h-100 justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img alt="" className="img-fluid m-auto d-flex" src={car.img_url}/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="mt-5">
                    <h2>{car.make} {car.model}</h2>
                    <p>{car.summary}</p>
                    <p> RRP <b> {Currency.format(car.rrp)}</b></p>
                    <p>
                        Recommended engines <b>{car.recommended_engine}</b>
                    </p>
                    <p>
                        carwow rating <b>{car.carwow_rating}</b>
                    </p>
                    <div>
                        {car.available_colors && car.available_colors.length ? (
                                <div>
                                    <p>Available colours</p>
                                    {car.available_colors.map(color => (
                                        <div className="color-palette" style={{backgroundColor: color}}></div>
                                    ))}
                                </div>
                            ) :
                            (<div>
                                    no colors
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
