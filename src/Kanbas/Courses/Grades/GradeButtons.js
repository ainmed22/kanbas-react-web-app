import React from "react";
import { useParams } from "react-router-dom";

function GradeButtons() {
    return (
        <div>
            <div>
                <a href={window.location.href}>
                    <button type="button" className="btn btn-light float-end">
                        <i className="fa fa-gear mt-1"></i>
                    </button>
                </a>
                <a href={window.location.href}>
                    <button type="button" className="btn btn-light float-end me-1">
                        <i className="fa fa-file-export mt-1 me-1"></i>
                        Export
                        <i className="fa fa-angle-down"></i>
                    </button>
                </a>
                <a href={window.location.href}>
                    <button type="button" className="btn btn-light float-end me-1">
                        <i className="fa fa-file-import mt-1 me-1"></i>
                        Import
                    </button>
                </a>
            </div>

            <br/>
            <br/>

            <div className="container">
                <div className="row mb-2">
                    <div className="col">
                        <b>Student Names</b>
                    </div>
                    <div className="col">
                        <b>Assignment Names</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input className="form-control" placeholder="Search Students" />
                    </div>
                    <div className="col">
                        <input className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
            </div>

            <a href={window.location.href}>
                <button type="button" className="btn btn-light float-start mt-2">
                    <i className="fa fa-filter mt-1 me-1"></i>
                    Apply Filters
                </button>
            </a>
        </div>
    );
}
export default GradeButtons;