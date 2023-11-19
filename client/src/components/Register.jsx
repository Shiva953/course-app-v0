// import axios from "axios";
// import {useState} from "react";
// import { useParams, useNavigate } from "react-router-dom";
// /// File is incomplete. You need to add input boxes to take input for users to register.
// function Register() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const { person } = useParams();
//     const handleClick = async () =>{
//         const res = await axios.post(`http://localhost:3000/${person}/signup` , {
//             username : email,
//             password : password
//         })
//         if(res.status === 401){
//             alert('user already exists')
//         }
//         else{
//             navigate(`/${person}/login`)
//         }
//     }

//     return <div>
//         <h1>Register to the website</h1>
//         <br/>
//         <input type={"text"} onChange={e => setEmail(e.target.value)} />
//         <br/>
//         <input type={"text"} onChange={e => setPassword(e.target.value)} />
//         <br/>
//         <button onClick={handleClick}>Register</button>
//         <br/>
//         Already a user? <button onClick={() => {navigate(`/${person}/login`)}}>Login</button>
//     </div>
// }

// export default Register;
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { person } = useParams();

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const res = await axios.post(`http://localhost:3000/${person}/signup`, {
        username: email,
        password: password,
      });

      if (res.status === 401) {
        alert("User already exists");
      } else {
        navigate(`/${person}/login`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleClick}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  name="email"
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
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;