import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
let Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.logo}><img src="https://club.foto.ru/gallery/images/photo/2012/12/09/2083941.jpg" alt="img" /></div>
			<div className={s.logo}>
			</div>
			<div className={s.menu}>
				<ul className={s.list}>
					{ props.isAuth === true ? <li className={s.login}>{props.login}</li> : <> <li className={s.item}><NavLink to='/login'>Sign in</NavLink></li> <li className={s.item}><a href="#">Sign up</a></li> </>  }
				</ul>
			</div>
		</div>
	)
}

export default Header;