import React from "react";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import InputPost from "./InputPost/InputPost";
import {addPost} from "../../../../redux/profile-reducer";


class InputPostContainer extends React.Component {

    onSubmit = (data) => {
        this.props.addPost(data.postText)
    }

    render() {
        return (
            <>
                <ReduxInputPost onSubmit={this.onSubmit} />
            </>
        )
    }

}


let ReduxInputPost = reduxForm({
    form: 'inputPost'
})(InputPost)


let mapStateToProps = (state) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, {addPost}),
)(InputPostContainer)

