import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../store/usersReducer';
// import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import * as client from "../client";

const UserSwitcher = ({ users }) => {
    const selectedUser = useSelector(state => state.usersReducer.selectedUser);

    const [typedUsername, setTypedUsername] = useState("");
    const [typedPassword, setTypedPassword] = useState("");
    const [openLogin, setOpenLogin] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            client.account().then((response) => { 
                dispatch(selectUser(response));
            })
        };

        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, [dispatch]);
    
    const toggleLogin = () => {
        setOpenLogin(!openLogin);
    };
    
    const loginButton = async () => {
        try {
            const userObject = { username: typedUsername, password: typedPassword };
            const newUser = await client.signin(userObject);
            dispatch(selectUser(newUser));
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    
    const registerButton = async () => {
        try {
            const userObject = { username: typedUsername, password: typedPassword };
            const newUser = await client.signup(userObject);
            dispatch(selectUser(newUser));
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    
    const signOutButton = async () => {
        await client.signout();
        dispatch(selectUser(null));
    };

    return (
        <div className="card mt-2 ms-2">
            <div className="card-body">
                <h1 className="float-start mt-1">Joystick Journey</h1>
                
                <button className="btn btn-primary ms-3 mt-2"
                    onClick={toggleLogin}>
                    {selectedUser ? 'Current User: ' + selectedUser.username : 'Open Login Screen'}
                </button>
                
                <br/><br/>
                
                {openLogin && (
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
                            onClick={registerButton}>
                            Register
                        </button>
                        
                        {selectedUser && (
                            <button className="btn btn-danger mt-2 ms-2"
                                onClick={signOutButton}>
                                Sign Out
                            </button>
                        )}
                        
                        <div className="mt-2">
                            {error}
                        </div>
                        
                    </div>   
                )}
                
            </div>
        </div>
    );
};

export default UserSwitcher;
