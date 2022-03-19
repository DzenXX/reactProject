const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let _callSubscriber
let store = {
	_state: {
		NavbarState: {
			FriendsData: [
				{name: 'Anya', id: 'ann'},
				{name: 'Egor', id: 'egor'},
				{name: 'Sasha', id: 'alexander'},
				{name: 'Vlad', id: 'vladislav'},
				{name: 'Yarik', id: 'yaroslav'},
				{name: 'Ilya', id: 'ilya '}
			]
		},
		MessageState: {
			newMessageText: '',
			userData: [
				{name: 'Anyaaaa', id: 'ann'},
				{name: 'Egor', id: 'egor'},
				{name: 'Sasha', id: 'alexander'},
				{name: 'Vlad', id: 'vladislav'},
				{name: 'Yarik', id: 'yaroslav'}
			],
			textData: [
				{yourMessage: false, id: 'ann', text: 'Hello'},
				{yourMessage: true, id: 'ann', text: "Hi, what's up?"},
				{yourMessage: false, id: 'ann', text: 'Everithing is fine'}
			]
		},
		ProfileState: {
			newPostText: '',
			postData: [
				{
					id: '1',
					count: '15',
					text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eveniet accusamus, soluta praesentium recusandae maiores explicabo mollitia a. Odit magni culpa, ratione natus error eligendi, vero suscipit beatae et consequatur sapiente atque doloribus doloremque repellendus quia sint! Commodi ab unde suscipit accusamus, quae in nobis modi possimus tempora reiciendis quisquam.'
				},
				{id: '2', count: '4', text: "Hi, what's up?"},
				{
					id: '3',
					count: '20',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt commodi recusandae optio provident perspiciatis nemo sunt at in. Deserunt fugiat, sint beatae at numquam dolore ut possimus, labore repellat mollitia rem officiis. Ducimus, aliquid deserunt! Incidunt iusto, et quo molestiae perspiciatis officia pariatur perferendis vero atque molestias mollitia enim repellendus tempore porro maxime inventore quod itaque unde saepe nihil maiores esse beatae! Repellat quos hic quidem mollitia earum ipsum sapiente esse! Laboriosam accusantium totam similique fugiat, consectetur veniam expedita reprehenderit dolorem repellendus ducimus dignissimos perspiciatis quidem hic corrupti voluptate possimus! Esse delectus distinctio minus omnis vitae consequuntur ipsam corrupti.'
				}
			]
		}
	},
	getState() {
		return this._state
	},
	getPostData() {
		return this._state.ProfileState.postData
	},
	setNewPostText(value) {
		this._state.ProfileState.newPostText = value;
	},
	setNewMessageText(value) {
		this._state.MessageState.newMessageText = value;
	},
	pushNewPost(value) {
		this._state.ProfileState.postData.push(value)
	},
	pushNewMessage(value) {
		this._state.MessageState.textData.push(value)
	},
	getTextData() {
		return this._state.MessageState.textData
	},
	getUserData() {
		return this._state.MessageState.userData
	},
	getNewPostText() {
		return this._state.ProfileState.newPostText
	},
	getNewMessageText() {
		return this._state.MessageState.newMessageText
	},

	AddPost(){
		let newPost = {id: '5', count: '0', text: this.getNewPostText()};
		this.pushNewPost(newPost);
		this.setNewPostText('');
		// state.ProfileState.newPostText = '';
		_callSubscriber(this._state);
	},
	AddMessage(text) {
		let newMessage = {yourMessage: true, id: 'ann', text: text};
		this.pushNewMessage(newMessage)
		this.setNewMessageText('')
		// state.MessageState.textData.push(newMessage);
		_callSubscriber(this._state);
		debugger;
	},
	updateNewPostText(newText) {
		this._state.ProfileState.newPostText = newText;
		_callSubscriber(this._state);
	},
	updateNewMessageText(newText) {
		// state.MessageState.newMessageText = newText;
		this.setNewMessageText(newText)
		_callSubscriber(this._state)
	},
	subscribe(observer) {
		_callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			this.AddPost()
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this.updateNewPostText(action.text)
		}
	}
}
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (newText) => ({ type: 'UPDATE-NEW-POST-TEXT', text: newText })


export default store