// import {Link} from "react-router-dom";
// import Nav from '../Nav';
import React from "react";
import Navigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Home";
import Profile from "./Profile";
import UserSwitcher from "./UserSwitcher";
import * as client from "./client";
import Search from "./Search";
import Game from "./Game";

function Project() {
    
    const [games, setGames] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            client.readGames().then((response) => { setGames(response); })
            client.readReviews().then((response) => { setReviews(response); })
            client.readUsers().then((response) => { setUsers(response); })
        };

        fetchData();
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <Provider store={store}>
            <UserSwitcher users={users} />
            <div className="d-flex">
                <Navigation/>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={
                            <Home
                                users={users}
                                games={games}
                                reviews={reviews}/>
                        } />
                        <Route path="Profile/:userId/" element={
                            <Profile users={users} games={games} reviews={reviews} />
                        } />
                        <Route path="Profile" element={
                            <Profile users={users} games={games} reviews={reviews} />
                        } />
                        <Route path="Search" element={
                            <Search users={users} games={games} reviews={reviews} />
                        } />
                        <Route path="Search/:query/:page/" element={
                            <Search users={users} games={games} reviews={reviews} />
                        } />
                        <Route path="Game/:gameID/" element={
                            <Game users={users} games={games} reviews={reviews} />
                        } />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Project;