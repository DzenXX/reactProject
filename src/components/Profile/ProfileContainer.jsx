import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom"


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId ;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }



    debugger;
    render() {
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






export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))