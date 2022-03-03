import React from 'react';
let Header = () => {
	return (
		<div className="app__header header">
			<div className="header__logo"><img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale" alt="img" /></div>
			<div className="header__menu">
				<ul className="header__list">
					<li className="header__item"><a href="#">News</a></li>
					<li className="header__item"><a href="#">Recommendations</a></li>
					<li className="header__item"><a href="#">Achievements</a></li>
					<li className="header__item"><a href="#">History</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Header;