import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../../Vendors/kanbas.css";

function AssignmentList() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div>
        
            <ul className="list-group">
            
                <li className="list-group-item list-group-item-secondary kanbas-module-header-padding">
                    <div>
                        <b>Assignments</b>
                        <i className="fa fa-ellipsis-vertical float-end mt-1"></i>
                        <i className="fa fa-plus float-end mt-1 me-3"></i>
                        <div className="border border-dark rounded-pill float-end me-3 kanbas-assignment-total">
                            40% of Total
                        </div>
                    </div>
                </li>
                
                {courseAssignments.map((assignment) => (
                    <li key={assignment._id} className="list-group-item kanbas-module-padding kanbas-assignment-border">
                        <div>
                            <i className="fa fa-ellipsis-vertical float-end mt-2"></i>
                            <i className="fa fa-circle-check float-end mt-2 me-3 kanbas-green ps-5"></i>
                            <h5 className="float-start mt-1 mb-1">
                                <i className="fa fa-file-pen kanbas-green ms-3 me-4"></i>
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="kanbas-no-underline kanbas-black"
                                >
                                    {assignment.title}
                                </Link>
                            </h5>
                        </div>
                    </li>
                ))}
            </ul>
        
        </div>
    );
}
export default AssignmentList;
