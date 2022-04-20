import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/preloader.gif'

class UsersContainer extends React.Component {
    componentDidMount() {
        debugger;
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)

        })
    }


    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)

        })
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
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer)