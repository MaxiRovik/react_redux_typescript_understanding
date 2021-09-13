import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useTypedSelector} from "../hook/useTypedSelector";
import {useActions} from "../hook/useAction";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();
    
    useEffect(() => {
       fetchUsers()
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error)
        return <h1>{error}</h1>

    return (
        <div>
            {users.map(user =>
                <div key={user.id} style = {{padding:'10px'}}>{user.name}</div>)}
        </div>
    )

};

export default UserList;