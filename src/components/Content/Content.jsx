import s from './Content.module.css'
import Profile from './Profile/Profile';
let Content = () => {
	return (
		<div className={s.content}>
			<div className={s.title}>Your Profile</div>
			<Profile />
		</div>
	)
}

export default Content;