import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
// const jwt_token = localStorage.getItem('jwt-token')
function ShowCourses() {
    const [courses, setCourses] = useState([]);
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const { person } = useParams();
    const navigate = useNavigate()
    const jwt_token = localStorage.getItem('jwt-token')
    console.log(jwt_token)
    useEffect(() => {

        const getCourses = async() => {
            const res = await axios.get(`http://localhost:3000/admin/courses`, {
                headers : {
                    Authorization : `Bearer ${jwt_token}`
                }
            })
            setCourses(res.data.courses)
            console.log(res.data.courses)
        }

        const getPurchasedCourses = async() => {
            const res = await axios.get(`http://localhost:3000/user/purchasedCourses`, {
                headers : {
                    Authorization : `Bearer ${jwt_token}`
                }
            })
            setPurchasedCourses(res.data.purchasedCourses)
            console.log(res.data.purchasedCourses)
        }

        if(jwt_token){
            getCourses()
            if(person==='user'){
                getPurchasedCourses()
            }
        }
    }, [jwt_token, person])
    
    const purchaseCourse = async(id) => {
        try{
            const res = await axios.post(`http://localhost:3000/user/courses/${id}` , null, {
                    headers : {
                        Authorization : `Bearer ${jwt_token}`
                    }
            })
            console.log(res.data.purchasedCourses)
            alert(`COURSE PURCHASED SUCCESSFULLY`)
        }
        catch(err){
            console.log(err)
        }
    }

    return <div>
        <h1>Your Courses</h1>
        {courses.map(c => <Course title={c.title} key={c._id} id={c._id} description={c.description} price={c.price} imageLink={c.imageLink} published={c.published} person={person} purchasedCoursesIfUser={purchasedCourses.some(co => co._id === c._id)} purchaseCourse={purchaseCourse}/>)}
        {person === 'admin' ? (<><button onClick={() => { navigate('/admin/createcourse') }}>CREATE A COURSE</button></>) : (<></>)}
    </div>
}

Course.propTypes = {
    title : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    person : PropTypes.string.isRequired,
    purchasedCoursesIfUser : PropTypes.bool.isRequired,
    purchaseCourse : PropTypes.func.isRequired,
    description : PropTypes.string.isRequired,
}

// const checkPurchasedCourses = async () => {
//     try{
//     const res = await axios.get(`http://localhost:3000/user/purchasedCourses` , {
//         headers : {
//             Authorization : `Bearer ${jwt_token}`
//         }
//     })
//     return res.data.purchasedCourses;
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// const purchaseCourse = async(id) => {
//     try{
//         const res = await axios.post(`http://localhost:3000/user/courses/${id}` , {
//                 headers : {
//                     Authorization : `Bearer ${jwt_token}`
//                 }
//         })
//         console.log(res.data.purchasedCourses)
//         alert(`COURSE PURCHASED SUCCESSFULLY`)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

function Course(props) {
    const navigate = useNavigate();

    const boxStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        margin: '10px',
    };

    const buttonStyle = {
        marginTop: '10px',
        padding: '5px 10px',
        borderRadius: '3px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    };

    return <div style={boxStyle}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        { props.person==='admin' ?
         <>
         <button onClick={() => {navigate(`/admin/course/${props.id}`)}} style={buttonStyle}>SHOW CONTENTS</button>
         </>
          : 
          <>
          {!(props.purchasedCoursesIfUser) ? 
          <button onClick={() => {props.purchaseCourse(props.id)}}>PURCHASE COURSE</button>
          :
          <>
          <a>ALREADY PURCHASED</a>
          </>
          }
          </> }
    </div>
}

export default ShowCourses;