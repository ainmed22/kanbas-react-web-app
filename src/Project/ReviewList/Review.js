import { Link } from "react-router-dom";
import { React, useState } from "react";
// import { React } from "react";
// import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import * as client from "../client";

function Review({ users, games, reviews, review }) {
    
    const selectedUser = useSelector((state) => state.usersReducer.selectedUser);

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(review.title);
    const [content, setContent] = useState(review.content);

    const startEditing = () => {
        setEditing(true);
    };
    
    const stopEditing = () => {
        setEditing(false);
    };

    const updateReview = async () => {
        const newReview = { ...review, "title": title, "content": content };
        client.updateReview(newReview).then((status) => {});
    };
    
    const deleteReview = async () => {
        client.deleteReview(review._id).then((status) => {});
    };

    return (
        <div key={review._id} className="mb-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{review.title}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">
                        <Link to={`../../Project/Profile/${review.userID}`} className="text-decoration-none">
                            by {users.find((user) => user._id === review.userID)?.username}
                        </Link>
                    </h5>
                    <p className="card-text">
                        <strong>Game: </strong>
                        <Link to={`../../Project/game/${review.gameID}`} className="text-decoration-none">
                            {games.find((game) => game._id === review.gameID)?.gameName}
                        </Link>
                        <br />
                        <strong>Date: </strong>
                        {new Date(review.date).toLocaleDateString()}
                        <br />
                        <strong>Review: </strong>
                        {review.content}
                    </p>
                    
                    {!editing && selectedUser &&
                    (selectedUser._id === review.userID || selectedUser.role === "ADMIN") && (
                        <button className="btn btn-primary"
                            onClick={startEditing}>
                            Edit
                        </button>
                    )}
                    
                    {editing && selectedUser &&
                    (selectedUser._id === review.userID || selectedUser.role === "ADMIN") && (
                        <>
                            {selectedUser._id === review.userID && (
                                <>
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
                                </>
                            )}
                            
                            <button className="btn btn-primary mt-2"
                                onClick={stopEditing}>
                                Stop Editing
                            </button>
                            
                            {selectedUser._id === review.userID && (
                                <button className="btn btn-warning mt-2 ms-2"
                                    onClick={updateReview}>
                                    Update
                                </button>
                            )}
                            
                            <button className="btn btn-danger mt-2 ms-2"
                                onClick={deleteReview}>
                                Delete
                            </button>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default Review;