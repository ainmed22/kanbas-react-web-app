// import {Link} from "react-router-dom";
// import Nav from '../Nav';
import React from "react";
import Navigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Home";
import Profile from "./Profile";
import UserSwitcher from "./UserSwitcher";

function Project() {
    
    /*
    const [users, setUsers] = useState(db.users);
    const [games, setGames] = useState(db.games);
    const [reviews, setReviews] = useState(db.reviews);
    */
    
    const [users] = useState(db.users);
    const [games] = useState(db.games);
    const [reviews] = useState(db.reviews);
    
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
    
    return (
        <Provider store={store}>
            <UserSwitcher/>
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
                            <Profile/>
                        } />
                        <Route path="Profile" element={
                            <Profile/>
                        } />
                        
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route
                          path="Courses"
                          element={<Navigate to={`${courses[0]._id}`} />}
                        />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Project;