import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ModuleButtons from "./ModuleButtons";

function ModuleList() {
    const { courseId } = useParams();
    const filteredModules = db.modules.filter((module) => module.course === courseId);
    const [modules, setModules] = useState(filteredModules);

    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });
    
    const addModule = (module) => {
        setModules([
            { ...module, _id: new Date().getTime().toString() },
            ...modules,
        ]);
    };
    
    const deleteModule = (moduleId) => {
        setModules(modules.filter((module) => module._id !== moduleId));
    };

    const updateModule = () => {
        setModules(
            modules.map((m) => {
                if (m._id === module._id) {
                    return module;
                } else {
                    return m;
                }
            })
        );
    };

    return (
        <div>
            <ModuleButtons />
            <br/><br/>
            
            <li className="list-group-item">
                <button className="btn btn-success mb-2 me-2"
                    onClick={() => { addModule(module) }}>
                    Add
                </button>
                <button className="btn btn-light mb-2 me-2"
                    onClick={updateModule}>
                    Update
                </button>
                <input className="form-control mb-2" 
                    value={module.name}
                    onChange={(e) => setModule({
                        ...module, name: e.target.value
                    })}
                />
                <textarea className="form-control mb-2" 
                    value={module.description}
                    onChange={(e) => setModule({
                        ...module, description: e.target.value
                    })}
                />
            </li>
            
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary kanbas-module-header-padding">
                    <div>
                        <b>Week 1 Modules</b>
                        <i className="fa fa-ellipsis-vertical float-end mt-1"></i>
                        <i className="fa fa-plus float-end mt-1 me-3"></i>
                        <i className="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
                    </div>
                </li>
                
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item kanbas-module-padding">
                        <div>
                            <i className="fa fa-ellipsis-vertical float-end mt-1"></i>
                            <i className="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
                            <b>{module.name}</b><br/>
                            {module.description}
                        </div>
                      
                        <button className="btn btn-danger float-end"
                            onClick={() => deleteModule(module._id)}>
                            Delete
                        </button>
                        
                        <button className="btn btn-light float-end me-2"
                            onClick={(event) => { setModule(module); }}>
                            Edit
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;