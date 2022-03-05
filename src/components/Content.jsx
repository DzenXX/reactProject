import s from './Content.module.css'
let Content = () => {
	return (
		<div className={s.content}>
			<div className={s.title}>Your Profile</div>
			<div className={s.profile}>
				<div className={s.profile__header}>
					<img className={s.profile__image} src="https://sanstv.ru/dict/images/dic-ie/00741.jpg" alt="img" />
					<div className={s.profile__info}>
						<div className={s.profile__name}>Timofey Parfenenko</div>
						<div className={s.profile__age}>Age: 16</div>
						<div className={s.profile__education}>Education: BSUIR branch MRC</div>
					</div>
				</div>
				<div className={`${s.profile__posts} ${s.posts}`}>
					<div className={s.posts__subtitle}>Your posts</div>
					<div className={s.posts__item}>First post ...</div>
					<div className={s.posts__item}>Second post ...</div>
				</div>
			</div>
		</div>
	)
}

export default Content;