import { useRef, useState } from "react";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const inputRef=useRef();
    inputRef.current.focus();

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "admin1234"){
            alert("Login success");
        }
        else{
            alert("Wrong email or password");
        }
    }
    return(
        <div>
            <input type="email" placeholder="Enter email" ref={inputRef} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter password " onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;