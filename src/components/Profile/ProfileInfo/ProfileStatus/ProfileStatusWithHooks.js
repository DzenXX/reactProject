import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";


let ProfileStatusWithHooks = (props) => {
    // state = {
    //     status: this.props.status,
    //     editMode: false,
    // }

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //         debugger;
    //         console.log('componentDidUpdate!')
    //     }
    // }

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        {
            editMode === false
                ? <div onDoubleClick={activateEditMode}
                       className={s.status__text}>{props.status || 'without status'}</div>
                : <div><input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                              className={s.status__input} value={status || 'without status'}></input></div>
        }
    </>
}

export default ProfileStatusWithHooks