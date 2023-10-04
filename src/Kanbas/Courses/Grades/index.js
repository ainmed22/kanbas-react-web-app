// import db from "../../Database";
// import { useParams } from "react-router-dom";
import GradeTable from "./GradeTable";
import GradeButtons from "./GradeButtons";

function Grades() {
    return (
        <div>
            <h1>Grades</h1>
            <GradeButtons/><br/><br/>
            <GradeTable/>
        </div>
    );
}
export default Grades;
