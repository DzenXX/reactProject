import {connect} from "react-redux";
import {
    changePage,
    setCurrentPage,
    follow, unfollow, getAllUsers
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import preloader from '../../assets/images/preloader.gif'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSelector
} from "../../redux/user-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getAllUsers(this.props.currentPage, this.props.pageSize)
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
    console.log('MapStateTopProps rerender')
    return {
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default connect(mapStateToProps, {
    setCurrentPage, follow, unfollow, getAllUsers, changePage
})(UsersContainer)