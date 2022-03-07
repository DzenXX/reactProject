import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

let Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<Posts />
		</div>
	)
}

export default Profile 