import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../store/usersReducer';

const UserSwitcher = () => {
  const selectedUser = useSelector(state => state.usersReducer.selectedUser);
  const users = useSelector(state => state.usersReducer.users);

  const dispatch = useDispatch();

  const handleUserClick = (user) => {
    dispatch(selectUser(user));
  };
  
  const handleUnselectUser = () => {
    dispatch(selectUser(null));
  };

  return (
    <div className="card">
      <div className="card-body">
        {selectedUser ? (
          <h2 className="card-title float-start me-2">{selectedUser.username}</h2>
        ) : (
          <h2 className="card-title float-start me-2">No selected user</h2>
        )}
        <div className="d-flex flex-row">
          {users.map((user) => (
            <div key={user._id}>
              <button
                className="btn btn-link border rounded text-decoration-none me-2"
                onClick={() => handleUserClick(user)}
              >
                {user.firstName} {user.lastName}
              </button>
            </div>
          ))}
          <button
            className="btn btn-link border rounded text-decoration-none me-2"
            onClick={handleUnselectUser}
          >
            Unselect User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSwitcher;