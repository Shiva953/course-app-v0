// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios'
// /// File is incomplete. You need to add input boxes to take input for users to login.
// function Login() {
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const navigate = useNavigate();
//     const { person } = useParams();
//     const handleClick = async () => {
//         try{
//             console.log(email)
//             console.log(password)
//             const response = await axios.post(`http://localhost:3000/${person}/login` , {username : email, password : password} , {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     username : email,
//                     password : password
//                 }
//             })
//             console.log(response.data.token)
//             localStorage.setItem('jwt-token', response.data.token);
//             navigate(`/${person}/courses`)
//         }
//         catch(error){
//             alert('User DNE')
//             console.log(error)
//         }
//     }

//     return <div>
//         <h1>Login to ${person} dashboard</h1>
//         <br/>
//         Email - <input type={"email"} onChange={e => setEmail(e.target.value)} />
//         <br/>
//         <br/>
//         Password - <input type={"password"} onChange={e => setPassword(e.target.value)} />
//         <br/>
//         <button onClick={handleClick}>Login</button>
//         <br/>
//         New here? <button onClick={() => {navigate(`/${person}/register`)}}>Register</button>
//     </div>
// }

// export default Login;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const { person } = useParams();

    const handleClick = async () => {
        try {
            console.log(email);
            console.log(password);
            const response = await axios.post(`http://localhost:3000/${person}/login`, {
                username: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    username: email,
                    password: password
                }
            });

            console.log(response.data.token);
            localStorage.setItem('jwt-token', response.data.token);
            navigate(`/${person}/courses`);
        } catch (error) {
            alert('User DNE');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-md p-8 rounded-md shadow-md">
                <Typography variant="h4" align="center" gutterBottom>
                    Login to {person} dashboard
                </Typography>

                <form className="space-y-4">
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleClick}
                        disableElevation
                    >
                        Login
                    </Button>
                </form>

                <Typography align="center" variant="body2">
                    New here?{' '}
                    <Button color="primary" onClick={() => navigate(`/${person}/register`)}>
                        Register
                    </Button>
                </Typography>
            </div>
        </div>
    );
}

export default Login;