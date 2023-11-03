// import React, { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import ModuleButtons from "./ModuleButtons";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    
    const handleUpdateModule = async () => {
        client.updateModule(module).then((status) => {
            dispatch(updateModule(module));
        });
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId, dispatch]);
    
    /*
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
    */

    return (
        <div>
            <ModuleButtons />
            <br/><br/>
            
            <li className="list-group-item">
                <button className="btn btn-success mb-2 me-2"
                    onClick={handleAddModule}>
                    Add
                </button>
                <button className="btn btn-warning mb-2 me-2"
                    onClick={handleUpdateModule}>
                    Update
                </button>
                <input className="form-control mb-2" 
                    value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
                <textarea className="form-control mb-2" 
                    value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
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
                
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                    <li key={index} className="list-group-item kanbas-module-padding">
                        <div>
                            <i className="fa fa-ellipsis-vertical float-end mt-1"></i>
                            <i className="fa fa-circle-check float-end mt-1 me-3 kanbas-green ps-5"></i>
                            <b>{module.name}</b><br/>
                            {module.description}
                            
                            <button className="btn btn-danger float-end mt-2"
                                onClick={() => handleDeleteModule(module._id)}>
                                Delete
                            </button>
                            
                            <button className="btn btn-primary float-end me-2 mt-2"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                        
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;