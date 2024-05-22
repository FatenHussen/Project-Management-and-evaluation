import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='container0'>
    <div className='header1'>
      <h1>Profile</h1>
      {image && <img src={image} alt="User" style={{ width: '100px', height: '100px' }  } />}
      <input
        type="file"
        accept="image/*"
        
        onChange={handleImageChange}
      />
      </div>
      <label htmlFor="Name">Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}    
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="Name">Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />
      <label htmlFor="Name">Birthday:</label>
      <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      <label htmlFor="Name">Phone:</label>
      <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <label htmlFor="Name">Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
};

export default Profile;