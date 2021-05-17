const Select = ({ name, register, required, children }) => {
    return (
        <select className="border mt-2" {...register(name, { required })}>
            {children}
        </select>
    )
}

export default Select;
