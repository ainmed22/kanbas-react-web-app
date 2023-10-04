import React from "react";
// import { Link, useParams } from "react-router-dom";
// import db from "../../Database";
import "../../../Vendors/kanbas.css";

function AssignmentButtons() {
    return (
        <div>
            <input className="form-control kanbas-item-width-200 float-start"
                    placeholder="Search for Assignment"
                    style={{ width: "200px" }}
            />
    
            <a href={window.location.href}>
                <button type="submit" className="btn btn-light float-end">
                    <i className="fa fa-ellipsis-vertical mt-1"></i>
                </button>
            </a>
            <a href={window.location.href}>
                <button type="submit" className="btn kanbas-light-gray-bg float-end me-1 kanbas-save-profile btn-danger">
                    <i className="fa fa-minus mt-1 me-1"></i>
                    Assignment
                </button>
            </a>
            <a href={window.location.href}>
                <button type="submit" className="btn btn-light float-end me-1">
                    <i className="fa fa-plus mt-1 me-1"></i>
                    Group
                </button>
            </a>
        </div>
    );
}
export default AssignmentButtons;
