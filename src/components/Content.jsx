let Content = () => {
	return (
		<div className="app__content content">
			<div className="content__title">Your Profile</div>
			<div className="content__profile profile">
				<div className="profile__header">
					<img className="profile__image" src="https://sanstv.ru/dict/images/dic-ie/00741.jpg" alt="img" />
					<div className="profile__info">
						<div className="profile__name">Timofey Parfenenko</div>
						<div className="profile__age">Age: 16</div>
						<div className="profile__education">Education: BSUIR branch MRC</div>
					</div>
				</div>
				<div className="profile__posts posts">
					<div className="posts__subtitle">Your posts</div>
					<div className="posts__item">First post ...</div>
					<div className="posts__item">Second post ...</div>
				</div>
			</div>
		</div>
	)
}

export default Content;