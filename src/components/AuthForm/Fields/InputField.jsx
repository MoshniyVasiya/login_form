import React from 'react';

const options = {
    password: {
        required: true,
        minLength: 8,
        maxLength: 20
    },
    email: {
        required: true,
        minLength: 6,
        maxLength: 25,
        pattern: /^[A-Za-z]+$/i
    }
}

const InputField = ({ register, name, type, formState: { errors }, placeholder }) => {

    return (
        <div className={`auth-form__${type === "checkbox" ? "check" : "field"} ${errors[name] && "error"}`}>
            <input
                {...register(name, (type !== "checkbox" && { ...options[name] }))}
                type={type}
                name={name}
                placeholder={placeholder}
            />
            {errors[name]?.type === 'required' && <span>This field is required</span>}
            {errors[name]?.type === 'pattern' && <span>This field shuold contain only letters</span>}
            {errors[name]?.type === 'minLength' && <span>Minimum {options[name].minLength} characters in this field</span>}
            {errors[name]?.type === 'maxLength' && <span>Maximum {options[name].maxLength} characters in this field</span>}
            {type === 'checkbox' &&
                <>
                    <label htmlFor={name} />
                    <span>Remember me</span>
                </>
            }
        </div>
    )
}

export default InputField;