// src/components/UpdateUser.js
import React, { useState } from 'react';
import axiosInstance from '../api/Axios.js';

const UpdateUser = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosInstance.put('/updateuser', { id, name });
        setId('');
        setName('');
    };

    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter user ID"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter new name"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
