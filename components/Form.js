import {useForm} from "react-hook-form";

const Form = ({}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => console.log(data);

    return(
        <div className="flex items-center h-screen w-full">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4">
                <form className="mb-4" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="first input">dummy input 1</label>
                        <input id="first input" className="border" type="text" {...register("first input", { required: true })}/>
                    </div>
                    <div className="flex flex-row mb-4">
                        <label className="my-0" htmlFor="second input">dummy input 2</label>
                        <input className="my-1" id="second input" type="checkbox" {...register("second input", { required: true })}/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="txtid">text area</label>
                        <textarea className="border" id="txtid" {...register("txtname", { maxlength:"200" })} />
                        <select className="border mt-2" {...register("selectBox")}>
                            <option value="-">--</option>
                            <option value="dodo">dodo</option>
                            <option value="dog">dog</option>
                            <option value="something">something</option>
                        </select>
                    </div>
                    <input type="submit"/>
                    <br/>
                    <input type="reset"/>
                </form>
            </div>
        </div>
    )
}

export default Form;
