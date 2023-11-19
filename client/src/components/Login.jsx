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
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { TextField, Button, Typography } from '@mui/material';

// function Login() {
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const navigate = useNavigate();
//     const { person } = useParams();

//     const handleClick = async () => {
//         try {
//             console.log(email);
//             console.log(password);
//             const response = await axios.post(`http://localhost:3000/${person}/login`, {
//                 username: email,
//                 password: password
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     username: email,
//                     password: password
//                 }
//             });

//             console.log(response.data.token);
//             localStorage.setItem('jwt-token', response.data.token);
//             navigate(`/${person}/courses`);
//         } catch (error) {
//             alert('User DNE');
//             console.error(error);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-white">
//             <div className="w-full max-w-md p-8 rounded-md shadow-md">
//                 <Typography variant="h4" align="center" gutterBottom>
//                     Login to {person} dashboard
//                 </Typography>

//                 <form className="space-y-4">
//                     <TextField
//                         fullWidth
//                         label="Email"
//                         variant="outlined"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />

//                     <TextField
//                         fullWidth
//                         label="Password"
//                         variant="outlined"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />

//                     <Button
//                         fullWidth
//                         variant="contained"
//                         onClick={handleClick}
//                         disableElevation
//                     >
//                         Login
//                     </Button>
//                 </form>

//                 <Typography align="center" variant="body2">
//                     New here?{' '}
//                     <Button color="primary" onClick={() => navigate(`/${person}/register`)}>
//                         Register
//                     </Button>
//                 </Typography>
//             </div>
//         </div>
//     );
// }

// export default Login;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const { person } = useParams();

    const handleClick = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

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
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleClick}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => navigate(`/${person}/register`)}>
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;