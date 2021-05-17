const CheckBox = ({name, label, register, required}) => {
    return(
        <div className="flex flex-row mb-4">
            <label className="my-0" htmlFor={name}>{label}</label>
            <input className="my-1" id={name} type="checkbox" {...register(name, { required })}/>
        </div>
    )
}

export default CheckBox;