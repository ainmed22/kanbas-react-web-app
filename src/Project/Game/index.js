import React from "react";
// import { Link, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "../client";
import ReviewList from "../ReviewList";
// import { useNavigate } from 'react-router-dom';

function Game({ users, reviews, games }) {
    
    var { gameID } = useParams();
   
    const [game, setGame] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const selectedUser = useSelector((state) => state.usersReducer.selectedUser);
    
    /*
    const [searchDraft, setSearchDraft] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchWaiting, setSearchWaiting] = useState(false);
    
    const [searchPrevious, setSearchPrevious] = useState("");
    const [searchNext, setSearchNext] = useState("");
    */

    useEffect(() => {
        setGame([]);
        client.getGame(gameID).then((response) => {
            setGame(response);
        });
    }, [gameID]);
    
    const createReview = async () => {
        const newReview = { "userID": selectedUser._id, "gameID": gameID, "date": new Date(), "title": title, "content": content };
        client.createReview(newReview).then((response) => {});
    };
    
    return (
        <div className="ms-2">
            {(!game || game.length === 0) && (<p className="ms-1 mt-3">Loading results. Please wait...</p>)}
            <div className="card mt-3" key={game.id}>
                <div className="card-body">
                    <h2 className="card-title mb-3">{game.name}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Released:</strong> {game.released}
                        </li>
                        <li className="list-group-item">
                            <strong>Rating:</strong> {game.rating}
                        </li>
                        <li className="list-group-item">
                            <strong>Genres:</strong> {game.genres ? game.genres.map(genre => genre.name).join(", ") : ""}
                        </li>
                        <li className="list-group-item">
                            <strong>Game ID:</strong> {game.id}
                        </li>
                    </ul>
                </div>
            </div>
            
            {selectedUser && game && game.length !== 0 && (
                <>
                    <h3 className="mt-3 mb-3">Review this Game</h3>
                    <h5>Review Title</h5>
                    <input
                        id="title"
                        value={title}
                        className="form-control mb-2"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h5>Review Content</h5>
                    <textarea
                        id="content"
                        value={content}
                        className="form-control mb-2"
                        rows="4"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button className="btn btn-primary mt-2"
                        onClick={createReview}>
                        Post Review
                    </button>
                </>
            )}
            
            <h2 className="mt-3 mb-3">Reviews for {game.name}</h2>
            <ReviewList 
                users={users}
                games={games}
                reviews={reviews}
                searchUsers={users}
                searchGames={[{ _id: gameID }]}
            />
            
        </div>
    );
}

export default Game;