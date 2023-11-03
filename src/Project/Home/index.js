import { Link } from "react-router-dom";
// import { React, useState } from "react";
import { React } from "react";
// import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";
import { useSelector } from "react-redux";

function Home({ users, games, reviews }) {
    const selectedUser = useSelector((state) => state.usersReducer.selectedUser);
    const followingList = selectedUser ? selectedUser.following : [];

    return (
        <div className="ms-3" style={{ width: "75%" }}>
            <h1 className="mt-4">Joystick Journey</h1>
            <hr />
            <h2>Latest Reviews</h2>
            <hr />

            <div>
                {reviews
                    .filter((review) =>
                        !selectedUser || followingList.includes(review.userID)
                    )
                    .slice()
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((review) => (
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
                                        {games.find((game) => game._id === review.gameID)?.gameName}
                                        <br />
                                        <strong>Date: </strong>
                                        {new Date(review.date).toLocaleDateString()}
                                        <br />
                                        <strong>Review: </strong>
                                        {review.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Home;