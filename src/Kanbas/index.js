import {Link} from "react-router-dom";
import Nav from '../Nav';
import React from "react";
import KanbasNavigation from "./KanbasNavigation";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div>
                <h1>Account</h1>
                <h1>Dashboard</h1>
                <h1>Courses</h1>
            </div>
        </div>
    );
}
export default Kanbas;
