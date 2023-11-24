// MovieGrid.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Details from './Details';
import './Moviegrid.css';

/**
 * MovieGrid Component displays a grid of movie items.
 *
 * @component
 * @param {Object} props - The properties of the MovieGrid component.
 * @param {Array} props.results - An array of movie data to be displayed in the grid.
 * @returns {JSX.Element} - The MovieGrid component.
 */
function MovieGrid({ results }) {
    // State to manage the details modal
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();

    /**
     * Display movie details in a modal and update the URL.
     *
     * @param {Object} selectedMovie - The selected movie data.
     */
    const showDetails = (selectedMovie) => {
        setMovie(selectedMovie);
        setIsOpen(true);
        navigate(`/details/${selectedMovie.id}`);
    };

    // Maximum characters to display in movie overview
    const MAX_CHARACTERS = 40;

    return (
        <div className="container d-flex  " style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            {results.length > 0 ? (
                results.map(({ id, poster_path, original_title, release_date, overview }, index) => (
                    <div className="movie-item col-12 col-md-6 col-lg-4" key={id} style={{ width: '200px' }}>
                        <img className='item-image'  src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} />
                        <div className='item-tittle'>
                            <h3>{original_title}</h3>
                        </div>
                        <div className='content '>
                            <p className="text-black-400">{release_date}</p>
                            <p className="text-black-400">{overview.length > MAX_CHARACTERS ? overview.substring(0, MAX_CHARACTERS) + "..." : overview}</p>
                        </div>
                        <button className="btn btn-success p-2 rounded-lg text-center my-2 w-100 font-weight-bold" onClick={() => showDetails({ ...results[index] })}>
                            Details
                        </button>
                    </div>
                ))
            ) : (
                <React.Fragment key="no-results">
                    <div>No result found</div>
                </React.Fragment>
            )}
            {isOpen && <Details setOpenModal={setIsOpen} movie={movie} results={results} />}
        </div>
    );
}

export default MovieGrid;
