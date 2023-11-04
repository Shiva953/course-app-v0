
import { useState, useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const jwt_token = localStorage.getItem('jwt-token')
    const { person } = useParams();
    useEffect(() => {
        if(jwt_token){
            setIsLoggedIn(true)
        }
    }, [jwt_token])

    const handleLogOut = () => {
       localStorage.removeItem('jwt-token');
       window.location.reload();
    }

    return (
        <div>
            <h1>Welcome to the course selling website!</h1>
            {!isLoggedIn ? (
                <>
                    {person === 'user' ? (
                        <>
                            <button onClick={() => { navigate('/user/register') }}>Register As User</button>
                            <br />
                            <button onClick={() => { navigate('/user/login') }}>Login As User</button>
                            <br />
                        </>
                    ) : person === 'admin' ? (
                        <>
                            <button onClick={() => { navigate('/admin/register') }}>Register As Admin</button>
                            <br />
                            <button onClick={() => { navigate('/admin/login') }}>Login As Admin</button>
                            <br />
                        </>
                    ) : (
                        <div>
                            Please login/register as User/Admin.
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <button onClick={() => { navigate(`/admin/courses`) }}>GO TO COURSES</button>
                    {person === 'admin' ? (
                        <button onClick={() => { navigate(`/admin/createcourse`) }}>CREATE A COURSE</button>
                    ) : (<></>)}
                    <button onClick={handleLogOut}>LOGOUT</button>
                </div>
            )}
        </div>
    );    
}

export default Landing;