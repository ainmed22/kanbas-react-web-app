import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
    const { userId } = useParams();
    const users = useSelector((state) => state.usersReducer.users);
    var user = users.find((user) => user._id === userId);

    const selectedUser = useSelector(state => state.usersReducer.selectedUser);
    if (!user && selectedUser) {
        user = users.find((user) => user._id === selectedUser._id);
    }
    if (!user) {
        return <div className="mt-2 ms-2"><h1>User not found</h1></div>;
    }

    const followings = users.filter(u => user.following.includes(u._id));
    const followers = users.filter(u => u.following.includes(user._id));

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title mb-3">{user.username}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Username:</strong> {user.username}
                        </li>
                        <li className="list-group-item">
                            <strong>Name:</strong> {user.firstName} {user.lastName}
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
                    </ul>
                </div>
            </div>

            <div className="mt-3">
                <div>
                    <h3>Following</h3>
                    <ul>
                        {followings.map((following) => (
                            <li key={following._id}>
                                <Link to={`/Project/Profile/${following._id}`}>{following.username}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
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
        </div>
    );
}

export default Profile;