import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ModuleButtons from "./ModuleButtons";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules.filter(
        (module) => module.course === courseId
    );

    return (
        <div>
            <ModuleButtons/>
            <br/><br/>
            <ul className="list-group">
            
                <li class="list-group-item list-group-item-secondary kanbas-module-header-padding">
                    <div>
                        <b>Week 1 Modules</b>
                        <i class="fa fa-ellipsis-vertical float-end mt-1"></i>
                        <i class="fa fa-plus float-end mt-1 me-3"></i>
                        <i class="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
                    </div>
                </li>
            
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item kanbas-module-padding">
                        <div>
                            <i class="fa fa-ellipsis-vertical float-end mt-1"></i>
                            <i class="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
                            <b>{module.name}</b><br/>
                            {module.description}
                        </div>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}
export default ModuleList;
