import s from './Messages.module.css'
import User from './User/User'
import Message from './Message/Message'



let Messages = () => {
	return (
		<div className={s.wrapper}>
			<ul className={s.users}>
				<User name='Anya' id='ann' />
				<User name='Egor' id='egor' />
				<User name='Sasha' id='alexander' />
				<User name='Vlad' id='vlad' />
				<User name='Yarik' id='yaroslav' />
			</ul>
			<div className={s.chat}>
				<div className={s.content}>
					<Message text='Hello'/>
					<Message text="Hi, what's up?"/>
					<Message text='Everithing is fine'/>
				{/* 	<div className={s.message}><span className={s.text}>Hello</span></div>
					<div className={s.message + ' ' + s.message_my}><span className={s.text}>Hi, what's up?</span></div>
					<div className={s.message}><span className={s.text}>Everithing is fine</span></div> */}
				</div>
			</div>
		</div>
	)
}

export default Messages 