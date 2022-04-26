import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, Redirect, useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId ;
        if (!userId) {
            userId = 23545;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }


    debugger;
    render() {
        // if (!this.props.isAuth) {
        //     return <Navigate to="/login"/>
        // }
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, setStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)