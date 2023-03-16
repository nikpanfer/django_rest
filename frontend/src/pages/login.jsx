import React from 'react';
import {LoginForm} from "../components/login_form";
export const Login = (props) => {
    return (
        <div>
            <LoginForm getToken={props.getToken}/>
        </div>
    );
};