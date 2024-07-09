import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    password: ""
  });

   // Ensure all values are strings
   const dataToSend = {
    fName: String(contact.fName),
    lName: String(contact.lName),
    email: String(contact.email),
    password: String(contact.password)
  };

  // Log the dataToSend object to ensure all values are strings
  console.log(dataToSend);


  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the data to the backend
    fetch('http://localhost:8000/api/v1/user', { // backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success 
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error (e.g., display an error message)
    });
  }

  return (
    <div className="container">
      <Header/>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}  // Add the onChange handler here
          name="password"
          value={contact.password}
          placeholder="Password"
          type="password"  // It's also good practice to use the type="password"
        />
        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
}

export default App;
