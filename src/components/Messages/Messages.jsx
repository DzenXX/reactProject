import s from './Messages.module.css'
import User from './User/User'
import Message from './Message/Message'
import Input from "./Input/Input";



let Messages = (props) => {
	let textElements = props.state.textData.map(t => (<Message state = {t} />))
	let userElements = props.state.userData.map(u => (<User name={u.name} id={u.id} />))
	debugger;
	return (
		<div className={s.wrapper}>
			<ul className={s.users}>
				{userElements}
			</ul>
			<div className={s.chat}>
				<div className={s.content}>
					{textElements}
					<Input AddMessage = { props.AddMessage } />
				</div>
			</div>
		</div>
	)
}

export default Messages 