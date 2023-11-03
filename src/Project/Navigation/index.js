import React from "react";
import { useLocation } from "react-router-dom";
import "../../Vendors/fontawesome-free-6.4.2-web/css/all.css"
import "../../Vendors/kanbas.css";

function Navigation() {
    const baseUrl = "#/Project";
    const links = [
        { name: "Home", url: `${baseUrl}/Home`, iconClass: "fa fa-house kanbas-gray" },
        { name: "Profile", url: `${baseUrl}/Profile`, iconClass: "fa fa-user kanbas-gray" },
        { name: "Search", url: `${baseUrl}/Search`, iconClass: "fa fa-magnifying-glass kanbas-gray" },
        { name: "Dashboard", url: `${baseUrl}/Dashboard`, iconClass: "fa fa-clock kanbas-gray" },
        { name: "Courses", url: `${baseUrl}/Courses`, iconClass: "fa fa-book kanbas-gray" }
    ];

    const { pathname } = useLocation();

    return (
        <div className="list-group kanbas-sidebar kanbas-column" style={{ maxWidth: "80px", minWidth: "80px" }}>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className={`kanbas-no-underline ${ pathname.includes(link.name) ? "project-sidebar-selected" : "kanbas-sidebar-unselected" } kanbas-icon-padding`}
                >
                    <i className={link.iconClass}></i>
                    <br/>
                    <div className="kanbas-sidebar-text">{link.name}</div>
                </a>
            ))}
        </div>
    );
}

export default Navigation;