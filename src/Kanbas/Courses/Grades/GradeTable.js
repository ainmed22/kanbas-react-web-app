import db from "../../Database";
// import { useParams } from "react-router-dom";

function GradeTable() {
    const { courseId } = useParams();
    const users = db.users;
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const grades = db.grades;

    return (
        <div className="table-responsive mt-2">
            <table className="table table-striped border rounded">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (
                            <th key={assignment._id} className="kanbas-center-heading">
                                {assignment.title}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {enrollments.map((enrollment) => {
                        const user = users.find((user) => user._id === enrollment.user);
                        return (
                            <tr key={enrollment.user}>
                                <td>
                                    <a href={window.location.href} className="kanbas-hyperlink">
                                        {user.firstName} {user.lastName}
                                    </a>
                                </td>
                                {assignments.map((assignment) => {
                                    const grade = grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                    );
                                    return (
                                        <td key={assignment._id} className="kanbas-center-heading">
                                            {grade?.grade || ""}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GradeTable;
