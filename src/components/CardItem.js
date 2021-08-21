import React from 'react'
import { Link } from 'react-router-dom'


function CardItem() {
    return (
        <>
            <li className="cards__item"></li>
            <link className="cards__item__link">
                <figure className="cards__item__pic-wrap ">
                    <img src="/" alt="Travel Image"
                    className="cards__item__img"img/>
                </figure>  
                <div className="cards__item__info "div /> 
                <h5 className="cards__item__text"></h5>
            </link>
        </>
    )
}

export default CardItem;