// import { Link } from "react-router-dom";
// import { React, useState } from "react";
import { React } from "react";
// import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";
// import { useSelector } from "react-redux";
import Review from "./Review";

function ReviewList({ users, games, reviews, searchUsers, searchGames }) {    

    // const selectedUser = useSelector((state) => state.usersReducer.selectedUser);

    return (
        <div>
            {reviews
                .filter((review) => 
                    searchUsers.some((user) => user._id === review.userID) &&
                    searchGames.some((game) => game._id === review.gameID)
                )
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((review) => (
                    <Review
                        users={users}
                        games={games}
                        reviews={reviews}
                        review={review}
                    />
                ))}
        </div>
    );
}

export default ReviewList;