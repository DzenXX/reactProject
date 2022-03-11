import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let userData = [
	{ name: 'Anya', id: 'ann' },
	{ name: 'Egor', id: 'egor' },
	{ name: 'Sasha', id: 'alexander' },
	{ name: 'Vlad', id: 'vladislav' },
	{ name: 'Yarik', id: 'yaroslav' }
]
let textData = [{ id: 'ann', text: 'Hello' },
	{ id: 'ann', text: "Hi, what's up?" }, 
	{ id: 'ann', text: 'Everithing is fine' }
]
let postData = [
	{ id: '1', count: '15', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eveniet accusamus, soluta praesentium recusandae maiores explicabo mollitia a. Odit magni culpa, ratione natus error eligendi, vero suscipit beatae et consequatur sapiente atque doloribus doloremque repellendus quia sint! Commodi ab unde suscipit accusamus, quae in nobis modi possimus tempora reiciendis quisquam.' },
	{ id: '2', count: '4', text: "Hi, what's up?" },
	{ id: '3', count: '20', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore incidunt commodi recusandae optio provident perspiciatis nemo sunt at in. Deserunt fugiat, sint beatae at numquam dolore ut possimus, labore repellat mollitia rem officiis. Ducimus, aliquid deserunt! Incidunt iusto, et quo molestiae perspiciatis officia pariatur perferendis vero atque molestias mollitia enim repellendus tempore porro maxime inventore quod itaque unde saepe nihil maiores esse beatae! Repellat quos hic quidem mollitia earum ipsum sapiente esse! Laboriosam accusantium totam similique fugiat, consectetur veniam expedita reprehenderit dolorem repellendus ducimus dignissimos perspiciatis quidem hic corrupti voluptate possimus! Esse delectus distinctio minus omnis vitae consequuntur ipsam corrupti.' }
]

ReactDOM.render(
	<React.StrictMode>
	<App textData = {textData} userData = {userData} postData = {postData}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
