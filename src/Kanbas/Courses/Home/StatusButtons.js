import { useParams } from "react-router-dom";
import "../../../Vendors/kanbas.css";

function CourseStatus() {
    const buttons = [
        { text: "Unpublish", icon: "fa fa-ban", className: "btn btn-light" },
        { text: "Published", icon: "fa-solid fa-circle-check kanbas-white", className: "btn btn-success" },
        { text: "Import Existing Content", icon: "fa fa-file-import", className: "btn btn-light" },
        { text: "Import From Commons", icon: "fa fa-file-import", className: "btn btn-light" },
        { text: "Choose Home Page", icon: "fa fa-crosshairs", className: "btn btn-light" },
        { text: "View Course Stream", icon: "fa fa-chart-simple", className: "btn btn-light" },
        { text: "New Announcement", icon: "fa fa-bullhorn", className: "btn btn-light" },
        { text: "New Analytics", icon: "fa fa-chart-simple", className: "btn btn-light" },
        { text: "View Course Notifications", icon: "fa fa-bell", className: "btn btn-light" },
    ];

    return (
        <div>
            <div>Course Status</div>
            <hr/>
            <div className="kanbas-column">
                {buttons.map((item, index) => (
                    <div className="kanbas-item-width-250 mt-1 mb-1" key={index}>
                        <a href={window.location.href} className="kanbas-no-underline">
                            <button type="submit" className={`${item.className} kanbas-item-width-250`}>
                                <div className="kanbas-text-left">
                                    <i className={`${item.icon} mt-1 float-start`}></i>
                                    <div className="ms-2 float-start">{item.text}</div>
                                </div>
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CourseStatus;