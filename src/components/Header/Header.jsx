import React from 'react';
import s from './Header.module.css'
let Header = () => {
	return (
		<div className={s.header}>
			<div className={s.logo}><img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale" alt="img" /></div>
			<div className={s.menu}>
				<ul className={s.list}>
					<li className={s.item}><a href="#">Sign in</a></li>
					<li className={s.item}><a href="#">Sign up</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Header;