import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    // const inputRef=useRef(null);
    

    const handleLogin = () => {
        if(email === "admin@gmail.com" && password === "admin1234"){
            localStorage.setItem("isLoggedIn",true);
            alert("Login success");
            navigate("/admin");
        }
        else{
            alert("Wrong email or password");
        }
    }
    return(
        <>
            <h2>Login</h2>
            <div className="login-form">
                <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter password " onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login;