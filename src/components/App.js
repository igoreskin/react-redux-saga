import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

const App = (props) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {props.getUsersRequest()}, []);

  props.users.items.length > 0 && console.log("IN APP: ", props.users.items);

  const users = props.users;

  const handleSubmit = ({firstName, lastName}) => {
    console.log(firstName, lastName)
  }

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} />
    </div>
  );
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
