
// import { useState, useEffect, useRef } from "react";
// import { useNavigate , useParams } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// /// This is the landing page. You need to add a link to the login page here.
// /// Maybe also check from the backend if the user is already logged in and then show them a logout button
// /// Logging a user out is as simple as deleting the token from the local storage.
// function Landing() {
//     const navigate = useNavigate();
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const jwt_token = localStorage.getItem('jwt-token')
//     const { person } = useParams();
//     const role = useRef('');
//     useEffect(() => {
//         if(jwt_token){
//             const decoded = jwtDecode(jwt_token);
//             role.current = decoded.role;
//             console.log(role.current)
//             setIsLoggedIn(true)
//         }
//     }, [jwt_token])

//     const handleLogOut = () => {
//        localStorage.removeItem('jwt-token');
//        window.location.reload();
//     }

//     return (
//         <div>
//           {!isLoggedIn ? (
//             <>
//               {person === 'user' ? (
//                 <>
//                   <button onClick={() => navigate('/user/register')}>Register As User</button>
//                   <br />
//                   <button onClick={() => navigate('/user/login')}>Login As User</button>
//                   <br />
//                 </>
//               ) : person === 'admin' ? (
//                 <>
//                   <button onClick={() => navigate('/admin/register')}>Register As Admin</button>
//                   <br />
//                   <button onClick={() => navigate('/admin/login')}>Login As Admin</button>
//                   <br />
//                 </>
//               ) : (
//                 <div>
//                   Please login/register as User/Admin.
//                 </div>
//               )}
//             </>
//           ) : (
//             <div>
//               {role.current===person && 
//               <>
//                 <button onClick={() => navigate(`/${person}/courses`)}>GO TO COURSES</button>
//                 {person==='admin' && <button onClick={() => navigate(`/admin/createcourse`)}>CREATE COURSE</button>}
//                 <button onClick={handleLogOut}>LOGOUT</button>
//               </>
//               }
//               {role.current!==person && (
//               <>
//                   <button onClick={() => navigate(`/${person}/register`)}>Register As {person}</button>
//                   <br />
//                   <button onClick={() => navigate(`/${person}/login`)}>Login As {person}</button>
//                   <br />
//               </>)}
//               {/* {role.current === 'user' && person==='admin' && (
//               <>
//                   <button onClick={() => navigate('/user/register')}>Register As User</button>
//                   <br />
//                   <button onClick={() => navigate('/user/login')}>Login As User</button>
//                   <br />
//               </>)} */}
//             </div>
//           )}
//         </div>
//       );                
// }

// export default Landing;
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Landing() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const jwt_token = localStorage.getItem("jwt-token");
  const { person } = useParams();
  const role = useRef("");

  useEffect(() => {
    if (jwt_token) {
      const decoded = jwtDecode(jwt_token);
      role.current = decoded.role;
      setIsLoggedIn(true);
    }
  }, [jwt_token]);

  const handleLogOut = () => {
    localStorage.removeItem("jwt-token");
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!isLoggedIn ? (
        <>
          {person === "user" ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate("/user/register")}
              >
                Register As User
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate("/user/login")}
              >
                Login As User
              </button>
            </>
          ) : person === "admin" ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate("/admin/register")}
              >
                Register As Admin
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate("/admin/login")}
              >
                Login As Admin
              </button>
            </>
          ) : (
            <div>Please login/register as User/Admin.</div>
          )}
        </>
      ) : (
        <div>
          {role.current === person && (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate(`/${person}/courses`)}
              >
                GO TO COURSES
              </button>
              {person === "admin" && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6"
                  onClick={() => navigate(`/admin/createcourse`)}
                >
                  CREATE COURSE
                </button>
              )}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={handleLogOut}
              >
                LOGOUT
              </button>
            </>
          )}
          {role.current !== person && (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate(`/${person}/register`)}
              >
                Register As {person}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate(`/${person}/login`)}
              >
                Login As {person}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Landing;