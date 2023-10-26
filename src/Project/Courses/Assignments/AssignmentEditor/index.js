import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Saving assignment");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
    
            <a href={window.location.href}>
                <button type="submit" class="btn btn-light float-end">
                    <i class="fa fa-ellipsis-vertical mt-1"></i>
                </button>
            </a>
            <div class="kanbas-green float-end mt-2 me-3">
                <i class="fa fa-circle-check me-1"></i>
                Published
            </div>
            
            <br/><br/><hr/>
            
            <div>
                <div className="ms-1 mb-2">Assignment Name</div>
                
                <input value={assignment.title} className="form-control mb-2" />
                
                <button onClick={handleSave} className="btn float-end me-1 kanbas-save-profile btn-danger">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light float-end me-1">
                    Cancel
                </Link>      
            </div>
        
        </div>
    );
}
export default AssignmentEditor;
