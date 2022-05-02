import Posts from './Posts/Posts'
import InputPostContainer from "./InputPostContainer/InputPostContainer";

let MyPosts = (props) => {

    debugger;
    return (
        <div>
            <InputPostContainer />
            <Posts posts={props.posts} />
        </div>
    )
}

export default MyPosts