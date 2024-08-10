
import React, {useState } from "react";

function LoginForm() {
const [email,setEmail]=useState("");
const [password,setPassword]=useState('');
const [error, setError] = useState("");
const [user, setUser] = useState(null);

const handleEmail=(event)=>{
  setEmail(event.target.value)
}

const handlePassword=(event)=>{
  setPassword(event.target.value)
}


async function auth(event) {
  event.preventDefault();
  setError("");

  try {
    const response = await fetch("http://localhost:5002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
   
    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Login failed");
      console.log("kei error xa")
    } 
    setUser(data.user);

    setPassword("");
    setEmail("");
  } catch (err) {
    setError("error occurred while logging in");
    console.error("error in login:", err);
  }
}
  return (
    <div className="h-screen bg-yellow-950 flex justify-center">
      
      <div className=" w-auto mb-auto mt-4 rounded-lg justify-between items-center bg-lime-300 p-10">
      <h1 className="text-4xl pb-6">User Login Form </h1>
        <form method="post" className="flex flex-col " onSubmit={auth}>
          <span className="text-2xl pb-1">Email:</span>
          <input type="email"
           placeholder="Enter your email" 
           value={email}
           onChange={handleEmail}
           className="text-xl text-pretty 
           rounded-lg border border-gray-300 p-2"
           />
          <span className="text-2xl pb-1">Password:</span>
          <input type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
            className="text-xl text-pretty 
            rounded-lg border border-gray-300 
            p-2"/>
        </form>
        <button
         type="submit" 
        
        className="bg-slate-700 
        rounded-md cursor-pointer 
        p-3 m-4 hover:bg-slate-600 ">Login</button>
      </div>
      {user && (
          <div>
            You are logged in as {user.name}.
          </div>
        )}
        {error && (
          <div>
            {error}
          </div>
        )}
    </div>
  );
}

export default LoginForm;
