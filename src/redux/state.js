import {rerenderEntireTree} from "../render";

let state = {
	NavbarState: {
		FriendsData: [
			{ name: 'Anya', id: 'ann' },
			{ name: 'Egor', id: 'egor' },
			{ name: 'Sasha', id: 'alexander' },
			{ name: 'Vlad', id: 'vladislav' },
			{ name: 'Yarik', id: 'yaroslav' },
			{ name: 'Ilya', id: 'ilya '}
		]
	},
	MessageState: {
		userData: [
			{ name: 'Anyaaaa', id: 'ann' },
			{ name: 'Egor', id: 'egor' },
			{ name: 'Sasha', id: 'alexander' },
			{ name: 'Vlad', id: 'vladislav' },
			{ name: 'Yarik', id: 'yaroslav' }
		],
		textData: [
			{ yourMessage: false, id: 'ann', text: 'Hello' },
			{ yourMessage: true, id: 'ann', text: "Hi, what's up?" },
			{ yourMessage: false, id: 'ann', text: 'Everithing is fine' }
		]
	},
	ProfileState: {
		newPostText: '',
		postData: [
			{ id: '1', count: '15', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eveniet accusamus, soluta praesentium recusandae maiores explicabo mollitia a. Odit magni culpa, ratione natus error eligendi, vero suscipit beatae et consequatur sapiente atque doloribus doloremque repellendus quia sint! Commodi ab unde suscipit accusamus, quae in nobis modi possimus tempora reiciendis quisquam.' },
			{ id: '2', count: '4', text: "Hi, what's up?" },
			{ id: '3', count: '20', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt commodi recusandae optio provident perspiciatis nemo sunt at in. Deserunt fugiat, sint beatae at numquam dolore ut possimus, labore repellat mollitia rem officiis. Ducimus, aliquid deserunt! Incidunt iusto, et quo molestiae perspiciatis officia pariatur perferendis vero atque molestias mollitia enim repellendus tempore porro maxime inventore quod itaque unde saepe nihil maiores esse beatae! Repellat quos hic quidem mollitia earum ipsum sapiente esse! Laboriosam accusantium totam similique fugiat, consectetur veniam expedita reprehenderit dolorem repellendus ducimus dignissimos perspiciatis quidem hic corrupti voluptate possimus! Esse delectus distinctio minus omnis vitae consequuntur ipsam corrupti.' }
		]
	}
}

window.state = state

export let AddPost = () => {
 	let newPost = { id: '5', count: '0', text:  state.ProfileState.newPostText };
	state.ProfileState.postData.push(newPost);
	state.ProfileState.newPostText = '';
	rerenderEntireTree(state);
}
export let AddMessage = (text) => {
	let newMessage = { yourMessage: true, id: 'ann', text: text };
	state.MessageState.textData.push(newMessage);
	rerenderEntireTree(state);
	debugger;
}
export let UpdateNewPostText = (newText) => {
	state.ProfileState.newPostText = newText;
	rerenderEntireTree(state);
}

export default state