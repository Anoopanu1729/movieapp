import { useEffect, useState } from 'react';
import MovieGrid from './MovieGrid';
import { API_KEY } from '../../apikey';
import { RingLoader } from "react-spinners";




function Popular() {

    const [popular, setPopular] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchPopular = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
            .then(res => res.json())
            .then(res => {
                setPopular(res.results ?? []);
                setLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching popular movies:', error);
            });
    }

    useEffect(() => {
        fetchPopular()
    }, []);

    return (

        <section>
            {loaded ? (
                <MovieGrid results={popular} />
            ) : (
                <div className="loading">
                    <RingLoader color="#4A90E2" loading={!loaded} size={150} />
                </div>
            )}
        </section>
    );
}

export default Popular;