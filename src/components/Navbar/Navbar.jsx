import s from './Navbar.module.css'

let Navbar = () => {
	return (
		<div className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}><a href='profile'>Profile</a></li>
				<li className={s.item}><a href='messages'>Messages</a></li>
				<li className={s.item}><a href='#'>News</a></li>
				<li className={s.item}><a href='#'>Music</a></li>
				<li className={s.item}><a href='#'>Settings</a></li>
			</ul>
		</div>
	)
}

export default Navbar;