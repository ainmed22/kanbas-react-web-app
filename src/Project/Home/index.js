// import { Link } from "react-router-dom";
// import { React, useState } from "react";
import { React, useState } from "react";
// import db from "../Database";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css";
import "../../Vendors/kanbas.css";
import { useSelector } from "react-redux";
import ReviewList from "../ReviewList";

function Home({ users, games, reviews }) {
    const selectedUser = useSelector((state) => state.usersReducer.selectedUser);
    const updatedUser = selectedUser ? users.find((user) => user._id === selectedUser._id) : null;

    const [followingReviews, setFollowingReviews] = useState(false);

    const toggleFollowingReviews = () => {
        setFollowingReviews(!followingReviews);
    };

    return (
        <div className="ms-3" style={{ width: "75%" }}>
            <h1 className="mt-4">Joystick Journey</h1>            
            <hr />
            Welcome to Joystick Journey – your go-to hub for video game reviews! Dive into the world of gaming with our variety of insights and recommendations. From action-packed adventures to compelling narratives, we're here to help you discover your next gaming obsession. Start your Joystick Journey today!
            <hr />
            
            <div className="float-start">
                { followingReviews && updatedUser ? <h2>Latest Reviews (Following)</h2> : <h2>Latest Reviews (All)</h2> }
            </div>
            
            { updatedUser && (
                <button className="btn btn-primary ms-2 float-start"
                    onClick={toggleFollowingReviews}>
                    { followingReviews && updatedUser ? "All Reviews" : "Following Reviews" }
                </button>
            )}
            
            <br/><br/>
            <hr />

            <ReviewList 
                users={users}
                games={games}
                reviews={reviews}
                searchUsers={followingReviews && updatedUser ? users.filter((user) => updatedUser.following.includes(user._id)) : users}
                searchGames={games}
            />
            
        </div>
    );
}

export default Home;