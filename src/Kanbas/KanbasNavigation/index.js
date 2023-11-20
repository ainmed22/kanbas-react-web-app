import React from "react";
import { useLocation } from "react-router-dom";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css"
import "../../Vendors/kanbas.css";

function KanbasNavigation() {
    const baseUrl = "#/Kanbas";
    const links = [
        { id: "Account", name: "Account", url: `${baseUrl}/Account`, iconClass: "fa fa-user kanbas-gray" },
        { id: "Dashboard", name: "Dashboard", url: `${baseUrl}/Dashboard`, iconClass: "fa fa-clock kanbas-red" },
        { id: "Courses", name: "Courses", url: `${baseUrl}/Courses`, iconClass: "fa fa-book kanbas-red" },
        { id: "Calendar", name: "Calendar", url: `${baseUrl}/Calendar`, iconClass: "fa fa-calendar kanbas-red" },
        { id: "Inbox", name: "Inbox", url: `${baseUrl}/Inbox`, iconClass: "fa fa-envelope kanbas-red" },
        { id: "History", name: "History", url: `${baseUrl}/History`, iconClass: "fa fa-hourglass kanbas-red" },
        { id: "Studio", name: "Studio", url: `${baseUrl}/Studio`, iconClass: "fa fa-tv kanbas-red" },
        { id: "Commons", name: "Commons", url: `${baseUrl}/Commons`, iconClass: "fa fa-tree kanbas-red" },
        { id: "Help", name: "Help", url: `${baseUrl}/Help`, iconClass: "fa fa-question kanbas-red" },
        { id: "Signin", name: "Sign In", url: `${baseUrl}/Signin`, iconClass: "fa fa-right-to-bracket kanbas-red" },
        { id: "Signup", name: "Sign Up", url: `${baseUrl}/Signup`, iconClass: "fa fa-user-plus kanbas-red" },
    ];

    const { pathname } = useLocation();

    return (
        <div className="list-group kanbas-sidebar kanbas-column">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className={`kanbas-no-underline ${ pathname.includes(link.id) ? "kanbas-sidebar-selected" : "kanbas-sidebar-unselected" } kanbas-icon-padding`}
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