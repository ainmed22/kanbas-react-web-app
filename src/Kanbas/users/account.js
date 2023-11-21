import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";


function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    
    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, [id]);

    return (
        <div className="container mt-3">
            <h1>Account</h1>
            {account && (
                <form>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={account.password}
                            onChange={(e) => setAccount({ ...account, password: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={account.firstName}
                            onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={account.lastName}
                            onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            value={account.dob}
                            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={account.email}
                            onChange={(e) => setAccount({ ...account, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select
                            className="form-select"
                            id="role"
                            onChange={(e) => setAccount({ ...account, role: e.target.value })}
                        >
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button type="button" className="btn btn-danger ms-2" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/kanbas/admin/users" className="btn btn-warning w-100 mt-3">
                        Users
                    </Link>
                </form>
            )}
        </div>
    );
}

export default Account;
