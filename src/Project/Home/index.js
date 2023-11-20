// import { Link } from "react-router-dom";
// import { React, useState } from "react";
import { React } from "react";
// import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";
import { useSelector } from "react-redux";
import ReviewList from "../ReviewList";

function Home({ users, games, reviews }) {
    const selectedUser = useSelector((state) => state.usersReducer.selectedUser);
    const updatedUser = selectedUser ? users.find((user) => user._id === selectedUser._id) : null;

    return (
        <div className="ms-3" style={{ width: "75%" }}>
            <h1 className="mt-4">Joystick Journey</h1>            
            <hr />
            Welcome to Joystick Journey – your go-to hub for video game reviews! Dive into the world of gaming with our variety of insights and recommendations. From action-packed adventures to compelling narratives, we're here to help you discover your next gaming obsession. Start your Joystick Journey today!
            <hr />
            { selectedUser ? <h2>Latest Reviews (Following)</h2> : <h2>Latest Reviews</h2> }
            <hr />

            <ReviewList 
                users={users}
                games={games}
                reviews={reviews}
                searchUsers={updatedUser ? users.filter((user) => updatedUser.following.includes(user._id)) : users}
                searchGames={games}
            />
        </div>
    );
}

export default Home;