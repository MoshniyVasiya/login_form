import React from 'react';
import './AuthForm.scss';
import { useForm } from "react-hook-form";
import InputField from './Fields/InputField';



const AuthForm = () => {

    const { handleSubmit, ...formControllers } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <InputField {...formControllers} type="text" name="email" placeholder="Email" />
            <InputField {...formControllers} type="password" name="password" placeholder="Password" />
            <a href="/">Forgot password?</a>
            <InputField {...formControllers} type="checkbox" name="remember_me" />
            <button type="submit" className="auth-form__submit">Continue</button>
        </form>
    )
}

export default AuthForm;
