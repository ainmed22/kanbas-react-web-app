// import {Link} from "react-router-dom";
// import Nav from '../Nav';
import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    
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
            <div className="d-flex">
                <KanbasNavigation/>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
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
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;