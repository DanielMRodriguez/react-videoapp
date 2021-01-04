import React from "react";
import { connect } from 'react-redux';
import { setFavorite, removeFavorite } from '../actions/index';
import PropTypes from "prop-types";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove.png";

import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = (props) => {
    const { cover, title, year, duration, contentRating, id, isList } = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            cover, title, year, duration, contentRating, id
        })
    }

    const handleRemoveFavorite = () => {
        props.removeFavorite(id);
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt="" />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                    {
                        isList
                            ?
                            <img className="carousel-item__details--img" src={removeIcon} alt="Remove" onClick={handleRemoveFavorite} />
                            :
                            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite} />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
            </div>
        </div>

    );
}

CarouselItem.prototype = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    contentRating: PropTypes.string
}

const mapDispatchToProps = {
    setFavorite,
    removeFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);