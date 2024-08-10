import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();
  
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  async function auth(event) {
    event.preventDefault();

    const backend = await fetch("http://localhost:5002/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if (!backend.ok) {
      console.error("Error in saving data :");
    }
    const result = await backend.json();
      setUser(result.user);
      
    console.log("Data saved successfully:", result);

    // Clear the form after successful submission
    setName("");
    setPassword("");
    setEmail("");

    navigate("/");
  }

  return (
    <div className="h-screen bg-yellow-950 flex justify-center">
      <div className=" w-auto mb-auto mt-4 rounded-lg justify-between items-center bg-lime-300 p-10">
        <h1 className="text-4xl pb-6">User Sign In Form </h1>
        <form method="post" className="flex flex-col " onSubmit={auth}>
          <span className="text-2xl pb-1">Email:</span>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
            className="text-xl text-pretty 
          rounded-lg border border-gray-300
           p-2"
          />
          <span className="text-2xl pb-1">Username:</span>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleName}
            className="text-xl text-pretty 
          rounded-lg border border-gray-300
           p-2"
          />
          <span className="text-2xl pb-1">Password:</span>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePassword}
            className="text-xl text-pretty
              rounded-lg border
               border-gray-300 p-2"
          />
          <button
            type="submit"
            className="bg-slate-700 
        rounded-md cursor-pointer 
        p-3 m-4 hover:bg-slate-600 "
          >
            Sign In
          </button>
        </form>
      </div>

      {user && (
        <div>
          You are signed in {user.name}.
        </div>
      )

      }
    </div>
  );
}

export default SignUpForm;
