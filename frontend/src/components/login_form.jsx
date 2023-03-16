import React, {useState} from 'react';

export const LoginForm = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        props.getToken(login, password)
        event.preventDefault()
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" name="login" placeholder="login"
                   value={login} onChange={(event) => setLogin(event.target.value)}/>
            <input type="password" name="password" placeholder="password"
                   value={password} onChange={(event) => setPassword(event.target.value)}/> <input type="submit"
                                                                                                       value="Login"/>
        </form>
    );
};