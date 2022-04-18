import s from './ProfileInfo.module.css'


let ProfileInfo = (props) => {
	if (!props.profile) {
		return <div>wait....</div>
	}

	return (
		<div>
			<div className={s.title}>Your Profile</div>
			<div className={s.header}>
				<img className={s.image} src={props.profile.photos.large} alt="img" />
				<div className={s.info}>
					<div className={s.name}>{props.profile.fullName}</div>
					<div className={s.age}>Обо мне: {props.profile.aboutMe}</div>
					{/*<div className={s.education}>Education: BSUIR branch MRC</div>*/}
					<div className={s.education}>Работа: {props.profile.lookingForAJobDescription}</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo

