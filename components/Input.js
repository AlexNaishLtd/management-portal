const Input = ({ name, label, register, required, type }) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name}>{label}</label>
            <input id={name} className="border" type={type} {...register(name, { required })}/>
        </div>
    )
}

export default Input;