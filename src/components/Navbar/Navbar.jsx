import s from './Navbar.module.css'

let Navbar = () => {
	return (
		<div className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}><a href='#'>Profile</a></li>
				<li className={s.item}><a href='#'>Masseges</a></li>
				<li className={s.item}><a href='#'>Music</a></li>
				<li className={s.item}><a href='#'>Games</a></li>
			</ul>
		</div>
	)
}

export default Navbar;