import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

const App = (props) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {props.getUsersRequest()}, []);

  props.users.items.length > 0 && console.log("IN APP: ", props.users.items);

  const users = props.users;

  const handleSubmit = ({firstName, lastName}) => {
    props.createUserRequest({firstName, lastName});
  }

  const handleDeleteUserClick = (userId) => {
    props.deleteUserRequest(userId);
  }

  const handleCloseAlert = () => {
    props.usersError({error: ''});
  }

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <Alert color="danger" isOpen={!!props.users.error} toggle={handleCloseAlert}>
        {props.users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} onDeleteUser={handleDeleteUserClick} />
    </div>
  );
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
})(App);
