// import { useParams } from "react-router-dom";
import "../../../Vendors/kanbas.css";
import StatusButtons from './StatusButtons';
import StatusToDo from './StatusToDo';
import StatusComingUp from './StatusComingUp';

function CourseStatus() {
    return (
        <div>
            <StatusButtons/>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <StatusToDo/>
            <StatusComingUp/>
        </div>
    );
}
export default CourseStatus;
