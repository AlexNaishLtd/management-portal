import {useForm} from "react-hook-form";

import Select from "./Select";
import Option from "./Option";
import TextArea from "./TextArea";
import Input from "./Input";
import CheckBox from "./CheckBox";

const Form = ({}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => console.log(data);

    return(
        <div className="flex items-center h-screen w-full">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4">
                <form className="mb-4" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Input label="dummy input 1" name="first input" type="text" register={register} required/>
                    <CheckBox label="dummy input 2" name="second input" register={register} required/>
                    <div className="flex flex-col mb-4">
                        <TextArea label="text area" name="txtname" register={register}/>
                        <Select name="selectBox" register={register} required>
                            <Option value="-" content="--"/>
                            <Option value="dodo" content="dodo"/>
                            <Option value="dog" content="dog"/>
                            <Option value="something" content="something"/>
                        </Select>
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
