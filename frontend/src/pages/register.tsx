import axios from "axios";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Register() {
    const [user, setUser] = useState ({
            name: "",
            email: "",
            password: ""
    });

    function handleChange() {

    }

    return (
        <div className="register">
            <Header/>
            <h1>
                Hello {user.name}
            </h1>
            <form>
                <input 
                    name="name"
                    value={user.name}
                    placeholder="user name"
                    onChange={handleChange}
                />
                <input 
                    name="email"
                    value={user.email}
                    placeholder="user email"
                    onChange={handleChange}
                />
                <input 
                    name="password"
                    value={user.password}
                    placeholder="user password"
                    onChange={handleChange}
                    type="password"
                />                
                <button type="submit">Submit</button>
            </form>
            <Footer/>
        </div>
    );
}
export default Register;