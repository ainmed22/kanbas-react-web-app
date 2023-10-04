import { useParams } from "react-router-dom";
import db from "../../../Kanbas/Database";

function ModuleButtons() {
    return (
        <div>
            <a href={window.location.href}>
                <button type="submit" className="btn btn-light float-end">
                    <i className="fa fa-ellipsis-vertical mt-1"></i>
                </button>
            </a>
            <a href={window.location.href}>
                <button type="submit" className="btn kanbas-light-gray-bg float-end me-1 kanbas-save-profile btn-danger">
                    <i className="fa fa-plus mt-1 me-1"></i>
                    Module
                </button>
            </a>

            <div className="dropdown float-end me-1">
                <button id="dropdown-1" className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i className="fa-regular fa-circle-check kanbas-light-green me-1"></i>
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={window.location.href}>Action</a></li>
                    <li><a className="dropdown-item" href={window.location.href}>Another action</a></li>
                    <li><a className="dropdown-item" href={window.location.href}>Something else here</a></li>
                </ul>
            </div>

            <a href={window.location.href}>
                <button type="submit" className="btn btn-light float-end me-1">
                    View Progress
                </button>
            </a>
            <a href={window.location.href}>
                <button type="submit" className="btn btn-light float-end me-1">
                    Collapse All
                </button>
            </a>
        </div>
    );
}
export default ModuleButtons;