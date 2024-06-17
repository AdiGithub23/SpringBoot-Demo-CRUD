// src/components/AddUser.js
import React, { useState } from 'react';
import axiosInstance from '../api/Axios.js';

const AddUser = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await axiosInstance.post('/adduser', { name })
        // .then((response) => {
        //   console.log(response);
        // })
        
        try {
          const response = await axiosInstance.post('/adduser', { id: parseInt(id, 10), name });
          console.log(response);
          // navigate("/");
      } catch (error) {
          console.error('Error while adding: ', error.response?.data || error.message);
      }
        setName('');
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter ID"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddUser;
