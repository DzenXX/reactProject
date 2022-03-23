const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postText = state.newPostText
            let newPost = {id: '5', count: '0', text: postText};
            state.postData.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, text: newText })

export default profileReducer