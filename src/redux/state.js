const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let _callSubscriber
let store = {
	_state: {
		sidebarPage: {
			FriendsData: [
				{name: 'Anya', id: 'ann'},
				{name: 'Egor', id: 'egor'},
				{name: 'Sasha', id: 'alexander'},
				{name: 'Vlad', id: 'vladislav'},
				{name: 'Yarik', id: 'yaroslav'},
				{name: 'Ilya', id: 'ilya '}
			]
		},
		messagePage: {
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
		profilePage: {
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
	subscribe(observer) {
		_callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			let postText = this._state.profilePage.newPostText
			let newPost = {id: '5', count: '0', text: postText};
			this._state.profilePage.postData.push(newPost)
			this._state.profilePage.newPostText = '';
			_callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.text;
			_callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			let messageText = this._state.messagePage.newMessageText;
			let newMessage = {yourMessage: true, id: 'ann', text: messageText};
			this._state.messagePage.textData.push(newMessage)
			this._state.messagePage.newMessageText = '';
			_callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.messagePage.newMessageText = action.text;
			_callSubscriber(this._state)
		}
	}
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText })
export const updateNewMessageTextActionCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: newText })
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})



export default store