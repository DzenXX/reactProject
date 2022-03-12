import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

let Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<Posts state = {props.state} />
		</div>
	)
}

export default Profile 