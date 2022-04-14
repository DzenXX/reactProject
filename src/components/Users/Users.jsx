import User from "./User/User";
import React from "react";
import s from './Users.module.css'
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


showUsers = () => {
    debugger;
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items)
    })
}
debugger;

render()
{
    return (
        <div>

            {
                this.props.users.map(u => (
                    <User photos={u.photos} follow={this.props.follow} unfollow={this.props.unfollow}
                          followed={u.followed} name={u.name}
                          userId={u.id} status={u.status}/>))
            }
            <button className={s.button} onClick={this.showUsers}>Show more</button>
        </div>
    )
}
}

export default Users