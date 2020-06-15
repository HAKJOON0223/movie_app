import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return(
        <Link className = "movie" to ={{
            pathname :`/movie/:${id}`,
            state:{
                year,
                title,
                summary,
                poster,
                genres,
            }
        }}>
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <div className="genres">
                    {genres.map((genres, index) => 
                        <span key={index} className="genres__genres">    {genres}    </span>
                        )}
                </div>
                    <p className="movie__summary">{summary}</p>
            </div>
        </Link>
    )
}

Movie.propTypes={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}
export default Movie;