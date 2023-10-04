// import { useParams } from "react-router-dom";
import "../../../Vendors/kanbas.css";

function StatusComingUp() {
    const upcoming = [
        {
            title: "Lecture",
            course: "CS4550.12631-202410",
            time: "Sep 11 at 11:45am",
        },
        {
            title: "CS5610 06 SP23 Lecture",
            course: "CS4550.12631 202410",
            time: "Sep 11 at 6pm",
        },
        {
            title: "CS5610 Web Development Summer 1 2023-LECTURE",
            course: "CS4550.12631.202410",
            time: "Sep 11 at 7pm",
        },
    ];

    return (
        <div>
            <div>
                <div className="float-start">Coming Up</div>
                <div className="float-end">
                    <i className="fa-solid fa-calendar float-start mt-1 me-1"></i>
                    <a href={window.location.href} className="kanbas-hyperlink float-start">View Calendar</a>
                </div>
            </div>

            <br/>
            <hr/>

            {upcoming.map((event, index) => (
                <div key={index} className="float-left mb-3">
                    <i className="fa-solid fa-calendar me-1"></i>
                    <a href={window.location.href} className="kanbas-hyperlink ps-1">
                        {event.title}
                    </a>
                    <div className="ps-4">{event.course}</div>
                    <div className="ps-4">{event.time}</div>
                </div>
            ))}
        </div>
    );
}
export default StatusComingUp;
