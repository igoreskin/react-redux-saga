import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';

const App = (props) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {props.getUsersRequest()}, []);

  props.users.items.length > 0 && console.log("IN APP: ", props.users.items);

  const users = props.users;

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      test
    </div>
  );
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
