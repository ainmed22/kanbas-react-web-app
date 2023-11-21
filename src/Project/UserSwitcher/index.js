import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../store/usersReducer';
// import { useState, useEffect } from "react";
import { useState } from "react";

const UserSwitcher = ({ users }) => {
    const selectedUser = useSelector(state => state.usersReducer.selectedUser);

    const [typedUsername, setTypedUsername] = useState("");
    const [typedPassword, setTypedPassword] = useState("");

    const dispatch = useDispatch();

    const handleUserClick = (user) => {
        dispatch(selectUser(user));
    };

    const handleUnselectUser = () => {
        dispatch(selectUser(null));
    };
    
    const loginButton = null;

    return (
        <div className="card mt-2 ms-2">
            <div className="card-body">
                <h1 className="float-start mt-1">Joystick Journey</h1>
                
                <button className="btn btn-primary ms-3 mt-2"
                    onClick={loginButton}>
                    {selectedUser ? 'Logout ' + selectedUser.username : 'Login User'}
                </button>
                
                <br/><br/>
                
                <div>
                    <h5>Username</h5>
                    <input
                        id="typedUsername"
                        value={typedUsername}
                        className="form-control mb-2"
                        style={{ maxWidth: "250px" }}
                        onChange={(e) => setTypedUsername(e.target.value)}
                    />
                    
                    <h5>Password</h5>
                    <input
                        id="typedPassword"
                        value={typedPassword}
                        className="form-control mb-2"
                        style={{ maxWidth: "250px" }}
                        onChange={(e) => setTypedPassword(e.target.value)}
                    />
                    
                    <button className="btn btn-primary mt-2"
                        onClick={loginButton}>
                        Login
                    </button>
                    
                    <button className="btn btn-warning mt-2 ms-2"
                        onClick={loginButton}>
                        Register
                    </button>
                </div>
                
                <br/><br/><br/>
                
                
                {selectedUser ? (
                    <h2 className="card-title float-start me-2">
                        {users.find((user) => user._id === selectedUser._id).username}
                    </h2>
                ) : (
                    <h2 className="card-title float-start me-2">No selected user</h2>
                )}
                <div className="d-flex flex-row">
                    {users.map((user) => (
                        <div key={user._id}>
                            <button
                                className="btn btn-link border rounded text-decoration-none me-2"
                                onClick={() => handleUserClick(user)}
                            >
                                {user.username}
                            </button>
                        </div>
                    ))}
                    <button
                        className="btn btn-link border rounded text-decoration-none me-2"
                        onClick={handleUnselectUser}
                    >
                        Unselect User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSwitcher;
