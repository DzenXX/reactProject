import {Component} from "react";
import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {setStatus} from "../redux/profile-reducer";


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        componentDidMount() {
        }

        render() {
            if (!this.props.isAuth) return <Navigate to='/login'/>
            return <Component {...this.props} />
        }
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToProps)(RedirectComponent)

}
