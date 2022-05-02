import s from './Messages.module.css'
import Input from "./InputContainer/Input/Input";
import InputContainer from "./InputContainer/InputContainer";



let Messages = (props) => {

	debugger;
	return (
		<div className={s.wrapper}>
			<ul className={s.users}>
				{props.userEl}
			</ul>
			<div className={s.chat}>
				<div className={s.content}>
					{props.textEl}
					<InputContainer />
				</div>
			</div>
		</div>
	)
}

export default Messages 