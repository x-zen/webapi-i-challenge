import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions';

import UserCard from './UserCard';

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <h2>UserList</h2>

        <div>
          {
            this.props.users.map(user => {
              return <UserCard user={user} key={user.id} />
            })
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isGettingUser: state.isGettingUser
  };
};

export default connect(mapStateToProps,
  { getUser }
)(UserList);
