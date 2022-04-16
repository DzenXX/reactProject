import User from "./User/User";
import React from "react";
import s from './Users.module.css'
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        })
    }


    debugger;

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={`${this.props.currentPage === p && s.current} + ${s.button}` }
                            onClick={ () => { this.onPageChanged(p)} }>{` ${p} `}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u => (
                        <User photos={u.photos} follow={this.props.follow} unfollow={this.props.unfollow}
                              followed={u.followed} name={u.name}
                              userId={u.id} status={u.status}/>))
                }
            </div>
        )
    }
}

export default Users