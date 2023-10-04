import React from "react";
// import { Link, useParams } from "react-router-dom";
// import db from "../../Database";
import "../../../Vendors/kanbas.css";
import AssignmentList from "./AssignmentList";
import AssignmentButtons from "./AssignmentButtons";

function Assignments() {
    return (
        <div>
            <h2 className="mb-3">Assignments</h2>
            <AssignmentButtons/><br/><br/>
            <AssignmentList/>
        </div>
    );
}
export default Assignments;