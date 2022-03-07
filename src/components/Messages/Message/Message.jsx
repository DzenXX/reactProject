import s from './Message.module.css'



let Message = (props) => {
	return (
		<div className={s.message}><span className={s.text}>{props.text}</span></div>	
	)
}

export default Message
