import s from './Messages.module.css'
import User from './User/User'
import Message from './Message/Message'



let Messages = (props) => {

	let textElements = props.textData.map(t => (<Message text={t.text} />))
	let userElements = props.userData.map(u => (<User name={u.name} id={u.id} />))

	return (
		<div className={s.wrapper}>
			<ul className={s.users}>
				{userElements}
			</ul>
			<div className={s.chat}>
				<div className={s.content}>
					{textElements}
					{/* 	<div className={s.message}><span className={s.text}>Hello</span></div>
					<div className={s.message + ' ' + s.message_my}><span className={s.text}>Hi, what's up?</span></div>
					<div className={s.message}><span className={s.text}>Everithing is fine</span></div> */}
				</div>
			</div>
		</div>
	)
}

export default Messages 