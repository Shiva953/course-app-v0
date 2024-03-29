// // EditCourse.jsx
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditCourse = () => {
//   // Access the dynamic route parameter
//   const { courseId } = useParams();

//   // Use the courseId for further processing
//   const jwt_token = localStorage.getItem('jwt-token')
//     const navigate = useNavigate();
//     // const [edit, setEdit] = useState(false);
//     const [course, setCourse] = useState({
//         title : "",
//         description : "",
//         price : 0,
//         imageLink : "",
//         published : false
//     });
    
//     useEffect(() => {
//     const getCourse = async() => {
//       try{
//       const res = await axios.get(`http://localhost:3000/admin/courses`, {
//         headers : {
//           Authorization : `Bearer ${jwt_token}`
//         }
//       })
//       console.log(res.data.courses)
//       setCourse(res.data.courses.filter(c => c._id===courseId)[0])
//       }
//       catch(err){
//         console.log(err)
//       }
//     }
//     getCourse();
//   }, [jwt_token , courseId])

//     const handleEdit = async () => {
//       try{
//       course.published = true;
//       const res = await axios.put(`http://localhost:3000/admin/courses/${courseId}`, course , {
//         headers : {
//           Authorization : `Bearer ${jwt_token}`
//         }
//       })
//       console.log(res)
//       alert('Course Edited Sucessfully.')
//       navigate('/admin/courses')
//     }
//     catch(e){
//       console.log(e)
//     }
//     }
//   return (
//     <div>
//       {/* Your component JSX */}
//       <h2>Editing Course {courseId}</h2>
//         <p>Title</p>
//         <input type={"text"} onChange={e => setCourse({ ...course, title : e.target.value})} placeholder={`${course.title}`}/>
//         <p>Description</p>
//         <input type={"text"} onChange={e => setCourse({ ...course, description : e.target.value})} placeholder={`${course.description}`}/>
//         <p>Price</p>
//         <input type={"number"} onChange={e => setCourse({ ...course, price : e.target.value})} placeholder={`${course.price}`}/>
//         <p>ImageLink</p>
//         <input type={"link"} onChange={e => setCourse({ ...course, imageLink : e.target.value})} placeholder={`${course.imageLink}`}/>
//         <button onClick={handleEdit}>Edit Course</button>
//     </div>
//   );
// };

// // function CourseCard(props){

// // }

// export default EditCourse;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const EditCourse = () => {
  const { courseId } = useParams();
  const jwt_token = localStorage.getItem('jwt-token');
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    price: 0,
    imageLink: '',
    published: false,
  });

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`https://ncapp97341-backend.vercel.app/admin/courses`, {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        });
        console.log(res.data.courses);
        setCourse(res.data.courses.filter((c) => c._id === courseId)[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getCourse();
  }, [jwt_token, courseId]);

  const handleEdit = async () => {
    try {
      course.published = true;
      const res = await axios.put(
        `https://ncapp97341-backend.vercel.app/admin/courses/${courseId}`,
        course,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      console.log(res);
      alert('Course Edited Successfully.');
      navigate('/admin/courses');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 rounded-md shadow-md">
        <Typography variant="h6" align="center" gutterBottom>
          Editing Course {courseId}
        </Typography>

        <form className="space-y-4" style={{color: '#ffffff'}}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            type="text"
            InputProps={{
              style: { color: "#ffffff" },
            }}
            value={course.title}
            style={{color:"#ffffff"}}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />

          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            type="text"
            InputProps={{
              style: { color: "#ffffff" },
            }}
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            type="number"
            InputProps={{
              style: { color: "#ffffff" },
            }}
            value={course.price}
            onChange={(e) => setCourse({ ...course, price: e.target.value })}
          />

          <TextField
            fullWidth
            label="ImageLink"
            variant="outlined"
            type="link"
            InputProps={{
              style: { color: "#ffffff" },
            }}
            value={course.imageLink}
            onChange={(e) =>
              setCourse({ ...course, imageLink: e.target.value })
            }
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleEdit}
            disableElevation
          >
            Edit Course
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;