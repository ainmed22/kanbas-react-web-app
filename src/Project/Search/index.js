import React from "react";
// import { Link, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "../client";
// import ReviewList from "../ReviewList";
// import { useNavigate } from 'react-router-dom';

function Search({ users, reviews, games }) {
    
    var { query, page } = useParams();
    // const navigate = useNavigate();
    
    const [searchDraft, setSearchDraft] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchWaiting, setSearchWaiting] = useState(false);
    
    const [searchPrevious, setSearchPrevious] = useState("");
    const [searchNext, setSearchNext] = useState("");

    useEffect(() => {
        setSearchWaiting(true);
        client.searchGames(query, page).then((response) => {
            setSearchResults(response["results"]);
            setSearchPrevious(response["previous"]);
            setSearchNext(response["next"]);
            console.log(response);
            setSearchWaiting(false);
        });
    }, [query, page]);
    
    return (
        <div className="ms-2 mt-3">
            <h1>Search for Games</h1>
            
            <input
                id="searchDraft"
                value={searchDraft}
                className="form-control mb-2 mt-3"
                onChange={(e) => setSearchDraft(e.target.value)}
            />
            
            {searchDraft && (
                <a key={"searchButton"} href={`#/Project/Search/${searchDraft}/1`}>
                    <button className="btn btn-primary mt-2 ms-2">
                        Search
                    </button>
                </a>
            )}
            
            {searchPrevious && query && (
                <a key={"previousButton"} href={`#/Project/Search/${query}/${parseInt(page) - 1}`}>
                    <button className="btn btn-secondary mt-2 ms-2">
                        Previous Page
                    </button>
                </a>
            )}
            
            {searchNext && query && (
                <a key={"NextButton"} href={`#/Project/Search/${query}/${parseInt(page) + 1}`}>
                    <button className="btn btn-secondary mt-2 ms-2">
                        Next Page
                    </button>
                </a>
            )}
            
            {searchWaiting && (
                <p className="mt-3">Loading results. Please wait...</p>
            )}

            <h3 className="mt-3">Game List</h3>
            
            {searchResults.map((game) => (
                <div className="card mt-3" key={game.id}>
                    <div className="card-body">
                        <h2 className="card-title mb-3">
                            <a href={`#/Project/Game/${game.id}`} style={{ textDecoration: 'none' }}>
                                {game.name}
                            </a>
                        </h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Released:</strong> {game.released}
                            </li>
                            <li className="list-group-item">
                                <strong>Rating:</strong> {game.rating}
                            </li>
                            <li className="list-group-item">
                                <strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}
                            </li>
                            <li className="list-group-item">
                                <strong>Game ID:</strong> {game.id}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}

            
        </div>
    );
}

export default Search;