import s from './ComponentForField.module.css'


const ComponentForField = (Component) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    debugger;
    return (
        <>
            <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
                <Component {...input} {...props}></Component>
                {hasError && <div className={s.errorText}>{meta.error}</div>}
            </div>
        </>
    )
}

export default ComponentForField

