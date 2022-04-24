import {connect} from "react-redux";
import {
    changePage,
    acceptFollow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    acceptUnfollow, follow, unfollow
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/preloader.gif'
import {getUsers1} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    debugger;
    }


    onPageChanged = (pageNumber) => {
        debugger;
        this.props.changePage(pageNumber, this.props.pageSize)
    }
    debugger;

    render() {
        return <div style={{position: "relative"}}>
            <div style={{position: "absolute", top: '250px', left: '50%', transform: 'translate(-55%,0)',}}>
                <div style={this.props.isFetching === true ? {
                    display: 'block',
                    width: '130px',
                    color: "cornflowerblue",
                    fontSize: '20px',
                    transform: 'translate(20%,0)'
                } : {display: 'none'}}>Loading...
                </div>
                <img src={preloader}
                     style={this.props.isFetching === true ? {display: 'block', width: '130px'} : {display: 'none'}}
                     alt="#"/>
            </div>
            <div style={this.props.isFetching === false ? {display: 'block'} : {display: 'none'}}>
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}



export default connect(mapStateToProps, {
    setCurrentPage, follow, unfollow, getUsers, changePage
})(UsersContainer)