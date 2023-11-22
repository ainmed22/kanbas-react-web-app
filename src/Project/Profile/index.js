import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "../client";
import ReviewList from "../ReviewList";

function Profile({ users, reviews, games }) {
    
    // Get user ID from parameters
    var { userId } = useParams();    
    
    // What user is currently selected?
    const selectedUser = useSelector(state => state.usersReducer.selectedUser);
    
    // Initial set for user profile
    const [user, setUser] = useState(users.find((user) => user._id === userId));
    
    // Editing state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(new Date('2000-01-01'));
    const [description, setDescription] = useState("");
    const [editing, setEditing] = useState(false);
    
    // State for followers/followings of this profile
    const [followings, setFollowings] = useState([]);
    const [followers, setFollowers] = useState([]);

    // Is the logged in user following this profile?
    const [following, setFollowing] = useState(false);

    useEffect(() => {
        var chosenID = userId;
        
        // If the parameters don't exist, fall back on the selected user's ID
        if (userId === undefined && selectedUser !== null) {
            chosenID = selectedUser._id;
        }
        
        // Set user based on the user ID
        setUser(users.find((user) => user._id === chosenID));
        
        // If the user does exist, then set the followings/followers of this profile
        if (user) {
            setFollowings(users.filter(u => user.following.includes(u._id)));
            setFollowers(users.filter(u => u.following.includes(user._id)));
            setFollowing(selectedUser ? followers.some((item) => item._id === selectedUser._id) : false);
        }        
    }, [user, userId, selectedUser, followings, followers, users]);

    const editUserInfo = () => {
        setEditing(true);
        setUsername(user.username);
        setEmail(user.email);
        setDob(user.dob);
        setDescription(user.description);
    };
    
    const stopEditingUserInfo = () => {
        setEditing(false);
    };

    const updateUserInfo = async () => {
        const newUserInfo = { ...user, username: username, email: email, dob: dob, description: description };
        client.updateUser(newUserInfo).then((status) => {
            setUser(newUserInfo);
        });
    };
    
    const followUser = async () => {
        const updatedUser = { ...selectedUser, following: selectedUser.following.concat(user._id) };
        client.followUser(updatedUser, user).then((status) => {});
        setFollowing(!following);
    };
    
    const unfollowUser = async () => {
        const updatedUser = { ...selectedUser, following: selectedUser.following.concat(user._id) };
        client.unfollowUser(updatedUser, user).then((status) => {});
        setFollowing(!following);
    };

    return (
        user === undefined ? (<div className="mt-2 ms-2"><h1>User not found</h1></div>) : (
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title mb-3">
                            {user.username}
                            {selectedUser && selectedUser._id !== user._id && !following && (
                                <button className="btn btn-success ms-3"
                                    onClick={followUser}>
                                    Follow
                                </button>
                            )}
                            {selectedUser && selectedUser._id !== user._id && following && (
                                <button className="btn btn-success ms-3"
                                    onClick={unfollowUser}>
                                    Unfollow
                                </button>
                            )}
                        </h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Username:</strong> {user.username}
                            </li>
                            {selectedUser && selectedUser._id === user._id && (
                                <>
                                    <li className="list-group-item">
                                        <strong>Email:</strong> {user.email}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Date of Birth:</strong> {user.dob}
                                    </li>
                                </>
                            )}
                            <li className="list-group-item">
                                <strong>Description:</strong> {user.description}
                            </li>
                            <li className="list-group-item">
                                <strong>User Role:</strong> {user.role}
                            </li>
                        </ul>
                    </div>
                </div>

                {selectedUser && selectedUser._id === user._id && (
                    <>
                        {editing && (
                            <div className="mb-2 mt-4">
                                <h5>Modify Profile Information</h5>
                                
                                <label for="username" className="col-form-label">Username:</label>
                                <div>
                                    <input
                                        id="username"
                                        value={username}
                                        className="form-control mb-2"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <label for="email" className="col-form-label">Email:</label>
                                <div>
                                    <input
                                        id="email"
                                        value={email}
                                        className="form-control mb-2"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <label for="dob" className="col-form-label">Date of Birth:</label>
                                <div>
                                    <input
                                        id="dob"
                                        value={dob}
                                        className="form-control mb-2"
                                        type="date"
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </div>

                                <label for="description" className="col-form-label">Description:</label>
                                <div>
                                    <textarea
                                        id="description"
                                        value={description}
                                        className="form-control mb-2"
                                        rows="4"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                        
                        {!editing && (
                            <button className="btn btn-primary mt-2 mb-2 me-2"
                                onClick={editUserInfo}>
                                Edit
                            </button>
                        )}
                        
                        {editing && (
                            <>
                                <button className="btn btn-primary mt-2 mb-2 me-2"
                                    onClick={stopEditingUserInfo}>
                                    Stop Editing
                                </button>
                                <button className="btn btn-warning mt-2 mb-2 me-2"
                                    onClick={updateUserInfo}>
                                    Update
                                </button>
                            </>
                        )}
                    </>
                )}

                <div className="mt-3 row">
                    <div className="col">
                        <h3>Following</h3>
                        <ul>
                            {followings.map((following) => (
                                <li key={following._id}>
                                    <Link to={`/Project/Profile/${following._id}`}>{following.username}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Followers</h3>
                        <ul>
                            {followers.map((follower) => (
                                <li key={follower._id}>
                                    <Link to={`/Project/Profile/${follower._id}`}>{follower.username}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <h3 className = "mb-3">Reviews</h3>
                <ReviewList 
                    users={users}
                    games={games}
                    reviews={reviews}
                    searchUsers={[user]}
                    searchGames={games}
                />

            </div>
        )
    );
}

export default Profile;