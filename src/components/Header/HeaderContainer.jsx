import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {auth, authMe, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe()
        // authAPI().then(data => {
        //         if (data.resultCode === 0) {
        //             let {login, id, email} = data.data
        //             this.props.setAuthUserData(login, id, email)
        //             debugger;
        //         }
        //     })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer);