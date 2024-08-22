import React, { useState } from 'react';

function UserProfile() {
  // Initialize state with an object
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com'
  });

  // Function to update the user's name
  const updateName = (newName) => {
    setUser(prevUser => ({
      ...prevUser, // Spread operator to retain the other properties
      name: newName // Update only the name property
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      
      {/* Example button to update the name */}
      <button onClick={() => updateName('Jane Doe')}>Change Name</button>
    </div>
  );
}

export default UserProfile;
