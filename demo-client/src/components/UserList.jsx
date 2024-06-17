// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/Axios.js';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axiosInstance.get('/getusers');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
