import s from './User.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

let User = (props) => {

    let unfollowUser = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{
            withCredentials: true,
            headers: {
                'API-KEY': 'c623e0d5-b645-4a5f-a99f-58bbc2af8303'
            },
        }).then(response => {
            if (response.data.resultCode === 0)
                props.unfollow(props.id)
        })
        debugger;
    }
    let followUser = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'c623e0d5-b645-4a5f-a99f-58bbc2af8303'
            },
        }).then(response => {
            if (response.data.resultCode === 0)
                props.follow(props.id)
        })
    }
    return (
        <div className={s.wrapper}>
            <NavLink to={'/profile/' + props.id}>
            <div className={s.content}>
                <img className={s.logo} src={ props.photos.small != null ? props.photos.small : "https://static.turbosquid.com/Preview/2015/05/19__15_58_37/SULLAFinal.jpg13871ffb-9e86-49b9-9211-4fa721216a9bLarge.jpg"} alt="#"/>
                <div className={s.content__info}>
                    <div className={s.content__name}>{props.name}</div>
                    <div className={s.content__status}>
                        { props.status != null ? props.status : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consequuntur, dicta eius, fugiat, optio possimus ratione reprehenderit rerum suscipit temporibus voluptates. Amet autem fugiat iusto maxime quam voluptate voluptates.'}
                    </div>
                    <div className={s.content__location}>
                        {props.location}
                    </div>
                </div>
            </div>
            </NavLink>
            <div className={s.button}>
                {props.followed === true ? <button onClick={unfollowUser} className={s.button_follow}>Follow</button> :
                    <button onClick={followUser} className={s.button_unfollow}>Unfollow</button>}
            </div>
            
        </div>
    )
}

export default User