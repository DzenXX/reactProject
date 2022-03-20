import s from './Messages.module.css'
import User from './User/User'
import Message from './Message/Message'
import Input from "./Input/Input";



let Messages = (props) => {
	let textElements = props.store.getTextData().map(t => (<Message store = {props.store} state = {t} />))
	let userElements = props.store.getUserData().map(u => (<User name={u.name} id={u.id} />))
	debugger;
	return (
		<div className={s.wrapper}>
			<ul className={s.users}>
				{userElements}
			</ul>
			<div className={s.chat}>
				<div className={s.content}>
					{textElements}
					<Input store = {props.store} dispatch={props.dispatch} />
				</div>
			</div>
		</div>
	)
}

export default Messages 