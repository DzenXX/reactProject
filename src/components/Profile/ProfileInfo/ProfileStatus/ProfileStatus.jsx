import React from "react";
import s from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {
    state = {
      editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {
               this.state.editMode === false
                   ? <div onDoubleClick={ this.activateEditMode } className={s.status__text}>{this.props.status}</div>
                   : <div><input onBlur={ this.deactivateEditMode } autoFocus={true} value={this.props.status} className={s.status__input}></input></div>
            }
        </>
    }
}

export default ProfileStatus