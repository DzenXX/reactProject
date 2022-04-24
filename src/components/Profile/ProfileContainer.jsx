import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
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
            userId = 2;
        }
        this.props.getProfile(userId)

    }


    debugger;
    render() {
        // if (!this.props.isAuth) {
        //     return <Navigate to="/login"/>
        // }
        return (
            <Profile {...this.props} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
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

// let AuthRedirectComponent = (props) => {
//     debugger;
//     if (!props.isAuth) {
//         return <Navigate to='/login' />
//     }
//     return <ProfileContainer {...props} />
// }

// const withAuthRedirect1 = (Component) => {
//             if (!this.props.isAuth) return <Navigate to='/login'/>
//             return <Component {...this.props} />
//     }

// export default connect(mapStateToProps, {setUserProfile, getProfile})(withRouter(withAuthRedirect(ProfileContainer)))

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)