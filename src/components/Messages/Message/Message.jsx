import s from './Message.module.css'



let Message = (props) => {
	debugger;
	if (props.state.yourMessage === false) {
	return (
		<div className={s.message}><div className={s.avatar}></div><span className={s.text}>{props.state.text}</span></div>	
	)
	} else {
		return (
			<div className={s.message + ' ' + s.message_your}><span className={s.text}>{props.state.text}</span><div className={s.avatar + ' ' + s.avatar_your}></div></div>	
		)
	}
}

export default Message
