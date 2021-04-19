import { Fragment } from 'react';

const TextArea = ({ label, name, register}) => {
    return(
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <textarea className="border" id={name} {...register(name)} />
        </Fragment>
    )
}

export default TextArea;