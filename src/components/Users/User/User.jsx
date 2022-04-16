import s from './User.module.css'

let User = (props) => {

    let unfollowUser = () => {
        props.unfollow(props.userId)
        debugger;
    }
    let followUser = () => {
        props.follow(props.userId)
    }
    debugger;
    return (
        <div className={s.wrapper}>
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
            <div className={s.button}>
                {props.followed === true ? <button onClick={unfollowUser} className={s.button_follow}>Follow</button> :
                    <button onClick={followUser} className={s.button_unfollow}>Unfollow</button>}
            </div>
        </div>
    )
}

export default User