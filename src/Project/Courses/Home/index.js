import ModuleList from "../Modules/ModuleList";
import CourseStatus from "./CourseStatus";
import "../../../Vendors/kanbas.css";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div className="float-start kanbas-edit-column me-4"><ModuleList/></div>
            <div className="float-start"><CourseStatus/></div>
        </div>
    );
}
export default Home;