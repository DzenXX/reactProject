import s from './Messages.module.css'
import UserChat from './User/UserChat'
import Message from './Message/Message'
import Input from "./Input/Input";



let Messages = (props) => {
	let textElements = props.textData.map(t => (<Message store = {props.store} state = {t} />))
	let userElements = props.userData.map(u => (<UserChat name={u.name} id={u.id} />))
	debugger;
	return (
		<div className={s.wrapper}>
			<ul className={s.users}>
				{userElements}
			</ul>
			<div className={s.chat}>
				<div className={s.content}>
					{textElements}
					<Input newMessageText={props.newMessageText} updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage} />
				</div>
			</div>
		</div>
	)
}

export default Messages 