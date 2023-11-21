import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState, useRef } from "react";
import {useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Appbar() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState(null);
    const role = useRef('');
    useEffect(() => {
        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        let token = localStorage.getItem("jwt-token")
        console.log(token)
        const decoded = token!==null ? jwtDecode(token) : {role : ''}
        role.current = decoded.role;
        console.log("token - " + token);
        fetch("https://ncapp97341-backend.vercel.app/admin/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt-token")
            }
        }).then(callback1)
    }, []);
    // navigate(`/${role}`)
    if (userEmail && role==='admin') {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10}}>
                <Button onClick={() => {navigate(`/`)}} style={{
                        backgroundColor: '#3498db', 
                        color: '#ffffff', 
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Inter, sans-serif', 
                    }}>NeutronsCourseVerse</Button>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/admin/createcourse")
                            }}
                        >Add course</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/admin/courses")
                            }}
                        >Courses</Button>
                    </div>

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/";
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10}}>
                <Typography variant={"h6"}>NeutronsCourseVerse</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/user/register")
                        }}
                    >Signup As User</Button>
                </div>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/admin/register")
                        }}
                    >Signup As Admin</Button>
                </div>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/user/login")
                        }}
                    >Signin as User</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/admin/login")
                        }}
                    >Signin As Admin</Button>
                </div>
            </div>
        </div>
    }
}

export default Appbar;