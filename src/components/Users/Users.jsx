import User from "./User/User";
import React from "react";
import s from './Users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger;
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span
                            className={`${props.currentPage === p && s.current} + ${s.button}`}
                            onClick={() => {
                                props.onPageChanged(p)
                            }
                            }>{` ${p} `}
                        </span>})
                }
            </div>
            {
                props.users.map(u => (
                    <User photos={u.photos} follow={props.follow}
                          unfollow={props.unfollow}
                          followed={u.followed} name={u.name}
                          id={u.id} status={u.status}/>))
            }
        </div>
    )

}

export default Users