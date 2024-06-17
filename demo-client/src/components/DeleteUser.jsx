// src/components/DeleteUser.js
import React, { useState } from 'react';
import axiosInstance from '../api/Axios.js';

const DeleteUser = () => {
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosInstance.delete(`/deleteuser/${id}`);
        setId('');
    };

    return (
        <div>
            <h2>Delete User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter user ID"
                />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteUser;
