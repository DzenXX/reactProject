import s from './ProfileInfo.module.css'


let ProfileInfo = () => {
	return (
		<div>
			<div className={s.title}>Your Profile</div>
			<div className={s.header}>
				<img className={s.image} src="https://sanstv.ru/dict/images/dic-ie/00741.jpg" alt="img" />
				<div className={s.info}>
					<div className={s.name}>Timofey Parfenenko</div>
					<div className={s.age}>Age: 16</div>
					<div className={s.education}>Education: BSUIR branch MRC</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo

