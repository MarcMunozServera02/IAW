import React, { useState } from 'react';
import { MdAddCircle, MdFavorite } from "react-icons/md";
import './Card.css';

const Card = (props) => {

    const showSeasonText = (props) => {
        if (props.type && props.type === "miniserie") return props.type
        if (props.seasons) return props.seasons + " temporadas";
        if (props.episodes) return props.episodes + " episodios"
        else return "undefined";

    }

    return (
        <article className="card">
            <div className="season">{showSeasonText(props)}</div>
            <img src={`/assets/img/${props.img}`} alt="" />
            <div className="container">
                {
                    props.matching > 50 &&
                    <div className="coincidencia">{props.matching}% de coincidencia</div>
                }
                <div className="info-card-container">
                    <div>
                        <span className={`pegi age-${props.pegi}`}>{props.pegi}+</span>
                        <span className="year">{props.year}</span>
                    </div>
                    <div className="tooltip">
                        <div className="tooltiptext">Añadir</div>
                        <MdAddCircle color="white" size="24" />
                        {/* <span className="material-icons btn-icon">add</span> */}
                    </div>
                </div>
                <p>{props.desc}</p>
            </div>
        </article>
    )
}

export default Card