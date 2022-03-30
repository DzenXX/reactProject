import s from './User.module.css'

let User = (props) => {

    let unfollowUser = () => {
        props.unfollow(props.userId)
        debugger;
    }
    let followUser = () => {
        props.follow(props.userId)
    }

    return (
        <div>
            <div className={s.content}>
                <div className={s.img}></div>
                <div className={s.content__info}>
                    <div className={s.content__status}>
                        {props.status}
                    </div>
                    <div className={s.content__location}>
                        {props.location}
                    </div>
                </div>
            </div>
            <div className={s.button}>
                {props.followed === true ? <button onClick={unfollowUser} className={s.button_follow}>Follow</button> :
                    <button onClick={followUser} className={s.button_unfollow}>Unfollow</button>}
            </div>
        </div>
    )
}

export default User