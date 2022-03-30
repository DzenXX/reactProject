import Friend from './Friend/Friend';
import s from './Friends.module.css'

let Friends = (props) => {
	let FriendsItems = props.friendsData.map( f => (<Friend state = {f} />))
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				My Friends
			</div>
			<div className={s.friends}>
			{FriendsItems}
			</div>
		</div>
	)
}

export default Friends;