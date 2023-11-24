import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../apikey';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, ListGroup, Row } from 'react-bootstrap';
import './Details.css';


function Details({ setOpenModal }) {
    // State to store movie details and loading status
    const [movie, setMovie] = useState({});
    const [loaded, setLoaded] = useState(false);

    // Get movie ID from the URL parameters
    const { id } = useParams();

    /**
     * Fetch movie details from the API.
     *
     * @param {string} id - The ID of the movie.
     */
    const fetchResults = (id) => {
        if (!id) {
            console.error('Movie ID is undefined');
            setLoaded(true);
            return;
        }

        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovie(data);
                setLoaded(true);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
                setLoaded(true);
            });
    };

    useEffect(() => {
        // Fetch movie details when the component mounts or when the movie ID changes
        fetchResults(id);
    }, [id]);

    // Display a loading message while fetching data
    if (!loaded) {
        return <div>Loading...</div>;
    }

    // Build the poster path for the movie
    const posterPath = movie && movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
    const posterPaths = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    /**
     * Truncate text to a specified limit.
     *
     * @param {string} text - The text to truncate.
     * @param {number} limit - The character limit.
     * @returns {string} - Truncated text.
     */
    function truncateText(text, limit) {
        const words = text.split(' ');
        return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
    }

    /**
     * Expand the movie overview text.
     */
    function toggleOverview() {
        const overviewText = document.getElementById('overviewText');
        overviewText.innerText = movie.overview; // Replace with the full overview text
    }

    return (
        <div className='flex justify-center items-center '>
            {/* Main Movie Information */}
            <div className='main-img'>
                <img src={posterPaths} alt={movie ? movie.original_title : ''} className='img-fluid cover-img' />
                <h2>{movie ? movie.original_title : ''}</h2>
                <p className='tagline'>{movie ? movie.tagline : ''}</p>
                <div className='vote-item container  '>{movie ? movie.status : ''}</div>
            </div>

            {/* Additional Movie Details */}
            <div className='container'>
                <Row className='pt-2'>
                    <Col>
                        <img src={posterPath} alt={movie ? movie.original_title : ''} className='img-fluid poster-img' />
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item className='lang'>Language: {movie && movie.original_language ? movie.original_language.toUpperCase() : ''}</ListGroup.Item>
                            <ListGroup.Item className='lang'>Rating : {movie ? movie.vote_average : ''}</ListGroup.Item>
                            <ListGroup.Item> </ListGroup.Item>
                            <ListGroup.Item> <span>Summary</span> <br /> {movie ? movie.overview : ''}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default Details;
