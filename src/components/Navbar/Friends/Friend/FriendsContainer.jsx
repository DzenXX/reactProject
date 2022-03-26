import Friends from "../Friends";
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";

let FriendsContainerr = () => {
    debugger;
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let friendsData = store.getState().sidebarPage.FriendsData
                    return <Friends friendsData={friendsData} />
                }
            }
        </StoreContext.Consumer>
    )
}

let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebarPage.FriendsData
    }
}


let FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;