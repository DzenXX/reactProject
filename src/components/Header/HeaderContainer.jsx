import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {auth, authMe, fake, logOut, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {


    componentDidMount() {
        setInterval( () => {
            this.props.fake()
        }, 1000)
    }


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        fakeCount: state.auth.fakeCount
    }
}


export default connect(mapStateToProps, {setAuthUserData, authMe, logOut, fake})(HeaderContainer);