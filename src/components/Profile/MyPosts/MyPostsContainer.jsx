import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messages-reducer";

let MyPostsContainerr = () => {

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

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
            debugger;
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer