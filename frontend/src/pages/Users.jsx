import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/User";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        console.log('qwe')
        axios.get('http://127.0.0.1:8000/api/users/').then(resp => {
          setUsers(resp.data.results);
        }).catch(err => console.log(err));
    })
    return ( <UserList users={users} /> );
}
 
export default Users;