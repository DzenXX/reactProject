import User from "./User/User";
import s from './Users.module.css'

let Users = (props) => {
    let newUsers = [
        {name: 'Anya', id: 'ann', followed: true, status: 'Everything is fine', location: 'Bobruisk, Belarus', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
        {name: 'Egor', id: 'egor', followed: true, status: 'Everything is fine', location: 'Minsk, Belarus', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
        {name: 'Sasha', id: 'alexander', followed: false, status: 'Everything is fine', location: 'Minsk, Belarus', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
        {name: 'Vlad', id: 'vladislav', followed: true, status: 'Everything is fine', location: 'Harkov, Ukraine', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3415135/pub_61616cb51acf7f5d7fbf3c44_616173587bb9ec38f6a25f73/scale_1200'},
    ]
    if (props.users.length === 0) {
        props.setUsers(newUsers)
    }
    debugger;
    let showUsers = () => {
        props.setUsers(newUsers)
    }
    debugger;
    return (
        <div>
            {
                props.users.map(u => (<User follow={props.follow} unfollow={props.unfollow} followed={u.followed} userId={u.id} status={u.status} avatar={u.avatar} location={u.location}/>))
            }
            <button className={s.button} onClick={showUsers}>Show more</button>
        </div>
    )
}

export default Users
