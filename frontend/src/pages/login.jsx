import React from 'react';
import {LoginForm} from "../components/login_form";
export const Login = ({getToken}) => {
    return (
        <div>
            <LoginForm getToken={getToken}/>
        </div>
    );
};