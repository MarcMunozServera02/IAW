import React from 'react'
import PropTypes from 'prop-types';
import './Card.css';

const CardPropTypes = ({img, year}) => {
    return (
        <article className="card">
            <div className="season">2 temporadas</div>
            <img src={`/assets/img/${img}`} alt="" />
            <div className="container">
                <div className="coincidencia">86% de coincidencia</div>
                <div className="info-card-container">
                    <div>
                        <span className="pegi age-16">16+</span>
                        <span className="year">{year}</span>
                    </div>
                    <div className="tooltip">
                        <div className="tooltiptext">Añadir</div>
                        <span className="material-icons btn-icon">add</span>
                    </div>
                </div>
                <p>Una historiadora, un soldado y un programador viajan en el tiempo para perseguir a
                    criminales que amenazan con perturbar el espacio-tiempo.</p>
            </div>
        </article>
    )
}


CardPropTypes.propTypes = {
    img: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    pegi: PropTypes.number,
}

CardPropTypes.defaultTypes = {
    pegi: 18
}

export default CardPropTypes

