import React from 'react';
import {useSelector} from "react-redux";

const UserList: React.FC = () => {
    const state = useSelector(state => state.users);
    console.log(state)
    return (
        <div>
fffffffffffffffffffffffffffffffffffffffffffffffff
        </div>
    )

};

export default UserList;