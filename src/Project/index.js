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
        client.readGames().then((response) => { setGames(response); })
        client.readReviews().then((response) => { setReviews(response); })
        client.readUsers().then((response) => { setUsers(response); })
    }); // , [courseId]);
    
    /*
    const [courses, setCourses] = useState(db.courses);
    
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });
    
    const addNewCourse = () => {
        const randomId = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit number
        setCourses([...courses, { ...course, _id: randomId }]);
        // setCourses([...courses, { ...course, _id: new Date().getTime() }]);
    };
    
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    */
    
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