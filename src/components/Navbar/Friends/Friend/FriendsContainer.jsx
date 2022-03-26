import Friends from "../Friends";
import StoreContext from "../../../../StoreContext";

let FriendsContainer = () => {
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

export default FriendsContainer;