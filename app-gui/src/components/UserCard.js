import React from 'react';
import { connect } from 'react-redux';

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>{this.props.user.name}</h3>
          <hr />
          <h5> ID#: {this.props.user.id}</h5>
          <p>{this.props.user.bio}</p>
        </div>

        <div>

        </div>
      </div>
    )
  }
}

export default UserCard;
