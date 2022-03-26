import Posts from './Posts/Posts'
import InputPost from "./InputPost/InputPost";

let MyPosts = (props) => {

    debugger;
    return (
        <div>
            <InputPost updateNewPostText = {props.updateNewPostText} newPostText={props.newPostText} addPost={props.addPost} />
            <Posts posts={props.posts} />
        </div>
    )
}

export default MyPosts