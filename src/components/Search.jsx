import { useEffect, useState } from 'react';
import MovieGrid from './MovieGrid';
import { API_KEY } from '../../apikey';
import Details from './Details';

function Search({ searchTerm }) {
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchResults = (term) => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results); // Log API response
                setResults(data.results ?? []);
                setLoaded(true);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
                setLoaded(true);
            });
    };

    useEffect(() => {
        // Only fetch results when searchTerm changes
        fetchResults(searchTerm);
    }, [searchTerm]);


    return (
        <section>
            {loaded ? (
                <>
                    <MovieGrid results={results} />
                    <Details movie={results} />
                </>
            ) : (
                <div className="loading">Loading...</div>
            )}
        </section>
    );
}

export default Search;
