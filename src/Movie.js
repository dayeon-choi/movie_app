import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, geners }) {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie_data"></div>
			<h3 className="movie__title">{title}</h3>
			<h5 className="movie__year">{year}</h5>
			<p className="movie__summary">{summary}</p>
			<ul className="genres">
				{generes.map((genre, index) => (
					<li key={index} className="genres__genre">
						{index}
						{genre}
					</li>
				))}
			</ul>
		</div>
	);
}

Movie.PropTypes = {
	id: PropsTypes.number.isRequired,
	year: PropsTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropsTypes.string.isRequired,
	geners: PropTypes.arrayOf(PropTypes.string).isRequered
};
