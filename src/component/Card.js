import React from 'react'
import "./Card.css"

export default function Card({head, Img,report,Text,unit}) {
    return (
        <div className='cardcontainer'>


            <h3 className='heading-card'>{head}</h3>

            <img className='card-img' src={Img} alt="" />

            <h2 className='card-report'>{report} <span>{unit}</span></h2>

            <p>{Text}</p>

        </div>
    )
}
