import s from './User.module.css'
import {NavLink} from "react-router-dom";
import {followUserAPI, unfollowUserAPI} from "../../../api/api";

let User = (props) => {
    debugger;
    let unfollowUser = () => {
        props.toggleFollowingInProgress(true, props.id)
       unfollowUserAPI(props.id).then(data => {
            if (data.resultCode === 0) {
                props.unfollow(props.id)
            }
           props.toggleFollowingInProgress(false, props.id)
        })
        debugger;
    }
    let followUser = () => {
        props.toggleFollowingInProgress(true, props.id)
        followUserAPI(props.id).then(data => {
            if (data.resultCode === 0) {
                props.follow(props.id)
            }
            props.toggleFollowingInProgress(false, props.id)
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
                {props.followed === true ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={unfollowUser} className={s.button_follow}>Follow</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={followUser} className={s.button_unfollow}>Unfollow</button>}
            </div>
            
        </div>
    )
}

export default User