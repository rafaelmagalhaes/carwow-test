import React from 'react'
import Currency from "../Helpers/currency";
import './singlecar.scss'

function Index({car}) {
    return (
        <div className=" container">
            <div className="row">
                <div className="col">
                    <img alt="" className="img-fluid" src={car.img_url}/>
                </div>
                <div className="col">
                    <div className="mt-5">
                        <h2>{car.make} {car.model}</h2>
                        <p>{car.summary}</p>
                        <p> RRP <b> {Currency.format(car.rrp)}</b></p>
                        <p>
                            Recommended engines <b>{car.recommended_engine}</b>
                        </p>
                        <div>
                            {car.available_colors.length ? (
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

        </div>
    )
}

export default Index
