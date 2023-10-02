import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../vendors/fontawesome-free-6.4.2-web/css/all.css"
import "../../vendors/kanbas.css";

function KanbasNavigation() {
    const baseUrl = "#/Kanbas";
    const links = [
        { name: "Account", url: `${baseUrl}/Account`, iconClass: "fa fa-user kanbas-gray" },
        { name: "Dashboard", url: `${baseUrl}/Dashboard`, iconClass: "fa fa-clock kanbas-red" },
        { name: "Courses", url: `${baseUrl}/Courses`, iconClass: "fa fa-book kanbas-red" },
        { name: "Calendar", url: `${baseUrl}/Calendar`, iconClass: "fa fa-calendar kanbas-red" },
        { name: "Inbox", url: `${baseUrl}/Inbox`, iconClass: "fa fa-envelope kanbas-red" },
        { name: "History", url: `${baseUrl}/History`, iconClass: "fa fa-hourglass kanbas-red" },
        { name: "Studio", url: `${baseUrl}/Studio`, iconClass: "fa fa-tv kanbas-red" },
        { name: "Commons", url: `${baseUrl}/Commons`, iconClass: "fa fa-tree kanbas-red" },
        { name: "Help", url: `${baseUrl}/Help`, iconClass: "fa fa-question kanbas-red" },
    ];

    const { pathname } = useLocation();

    return (
        <div className="list-group kanbas-sidebar kanbas-column">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className={`list-group-item ${ pathname.includes(link.name) ? "kanbas-sidebar-selected" : "kanbas-sidebar-unselected" } kanbas-icon-padding`}
                >
                    <i className={link.iconClass}></i>
                    <br/>
                    <div className="kanbas-sidebar-text">{link.name}</div>
                </a>
            ))}
        </div>
    );
}
export default KanbasNavigation;