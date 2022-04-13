import User from "./User/User";
import s from './Users.module.css'
import * as axios from "axios";

let Users = (props) => {
    // let newUsers = [
    //     {name: 'Anya', id: 'ann', followed: true, status: 'Everything is fine', location: 'Bobruisk, Belarus', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
    //     {name: 'Egor', id: 'egor', followed: true, status: 'Everything is fine', location: 'Minsk, Belarus', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
    //     {name: 'Sasha', id: 'alexander', followed: false, status: 'Everything is fine', location: 'Minsk, Belarus', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
    //     {name: 'Vlad', id: 'vladislav', followed: true, status: 'Everything is fine', location: 'Harkov, Ukraine', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
    // ]
 let getUsers = (e) => {
     e.target.style.display = 'none'
     if (props.users.length === 0) {
         // props.setUsers(newUsers)
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             debugger;
             props.setUsers(response.data.items)
         })
     }
    }

    debugger;
    let showUsers = () => {
        debugger;
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    debugger;
    return (
        <div>
            <div className={s.button}><button onClick={getUsers}>Get users</button></div>
            {
                props.users.map(u => (<User photos={u.photos} follow={props.follow} unfollow={props.unfollow} followed={u.followed} userId={u.id} status={u.status} />))
            }
            <button className={s.button} onClick={showUsers}>Show more</button>
        </div>
    )
}

export default Users