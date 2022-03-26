import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

let MyPostsContainer = () => {
    
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let AddPost = () => {
                        store.dispatch(addPostActionCreator());

                    }
                    let OnPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action)
                        debugger;
                    }
                    let newPostText = store.getState().profilePage.newPostText
                    let posts = store.getState().profilePage.postData
                    return <MyPosts updateNewPostText={OnPostChange} addPost={AddPost} posts={posts}
                             newPostText={newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer