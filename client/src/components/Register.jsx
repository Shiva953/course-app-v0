import axios from "axios";
import {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { person } = useParams();
    const handleClick = async () =>{
        const res = await axios.post(`http://localhost:3000/${person}/signup` , {
            username : email,
            password : password
        })
        if(res.status === 401){
            alert('user already exists')
        }
        else{
            navigate(`/${person}/login`)
        }
    }

    return <div>
        <h1>Register to the website</h1>
        <br/>
        <input type={"text"} onChange={e => setEmail(e.target.value)} />
        <br/>
        <input type={"text"} onChange={e => setPassword(e.target.value)} />
        <br/>
        <button onClick={handleClick}>Register</button>
        <br/>
        Already a user? <button onClick={() => {navigate(`/${person}/login`)}}>Login</button>
    </div>
}

export default Register;