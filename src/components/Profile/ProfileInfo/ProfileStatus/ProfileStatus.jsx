import React from "react";
import s from './ProfileStatus.module.css'
import {setStatus} from "../../../../redux/profile-reducer";
import {profileAPI} from "../../../../api/api";


class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
            debugger;
            console.log('componentDidUpdate!')
        }
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
        this.props.updateStatus(this.state.status)
        debugger
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <>
            {
                this.state.editMode === false
                    ? <div onDoubleClick={this.activateEditMode} className={s.status__text}>{this.props.status || 'without status'}</div>
                    : <div><input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} className={s.status__input} value={this.state.status || 'without status'}></input></div>
            }
        </>
    }
}

export default ProfileStatus