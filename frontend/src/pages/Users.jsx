import axios from "axios";
import {useEffect, useState} from "react";
import UserList from "../components/User";

const Users = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const headers = props.headers()

        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(resp => {
            setUsers(resp.data.results);
        }).catch(err => console.log(err));
    }, [])
    return (<UserList users={users}/>);
}

export default Users;