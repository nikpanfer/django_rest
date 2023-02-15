import React from 'react';

class User extends React.Component {
    render() {
        // console.log(this.props.user)
        return (
            <div className="user">
                <h3>{this.props.user.username}</h3>
                <p>{this.props.user['first_name']} {this.props.user['last_name']}</p>
            </div>
        );
    }
}

class UserList extends React.Component {
    render() {
        return (
            <div>{this.props.users.map(el => <User user={el} key={el.id}/>)}</div>
        )
    }
}

export default UserList;