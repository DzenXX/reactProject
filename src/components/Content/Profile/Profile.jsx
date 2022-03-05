import s from './Profile.module.css'

let Profile = () => {
	return (
		<div className={s.profile}>
			<div className={s.header}>
				<img className={s.image} src="https://sanstv.ru/dict/images/dic-ie/00741.jpg" alt="img" />
				<div className={s.info}>
					<div className={s.name}>Timofey Parfenenko</div>
					<div className={s.age}>Age: 16</div>
					<div className={s.education}>Education: BSUIR branch MRC</div>
				</div>
			</div>
			<div className={`${s.profile__posts} ${s.posts}`}>
				<div className={s.posts__subtitle}>Your posts</div>
				<div className={s.posts__item}>First post ...</div>
				<div className={s.posts__item}>Second post ...</div>
			</div>
		</div>
	)
}

export default Profile 