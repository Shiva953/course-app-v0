// import axios from "axios";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// /// You need to add input boxes to take input for users to create a course.
// /// I've added one input so you understand the api to do it.
// function CreateCourse() {
//     const navigate = useNavigate();
//     const [course, setCourse] = React.useState({
//         title : "",
//         description : "",
//         price : 0,
//         imageLink : "",
//         published : false
//     });
//     // the loc:5173/about, basically POST to the backend /admin/courses
//     const jwt_token = localStorage.getItem('jwt-token')
//     const handleClick = async () => {
//         try{
//             // setCourse({...course, published : true}) //this is working async, ENQUEUES the update and batches multiple setState calls, and as soon as other operations are complete it updates the state all at once
//             course.published = true
//             const res = await axios.post('http://localhost:3000/admin/courses', course, {
//             headers : {
//                 Authorization : `Bearer ${jwt_token}`
//             }
//         });
//         console.log(res.data)
//         alert('Successfully Added Course')
//         navigate('/courses')
//         }
//         catch(err){
//             // setCourse({...course, published : false})
//             console.log(err)
//         }
//     }
//     return <div>
//         <h1>Create Course Page</h1>
//         <p>Title</p>
//         <input type={"text"} onChange={e => setCourse({ ...course, title : e.target.value})} />
//         <p>Description</p>
//         <input type={"text"} onChange={e => setCourse({ ...course, description : e.target.value})} />
//         <p>Price</p>
//         <input type={"number"} onChange={e => setCourse({ ...course, price : e.target.value})} />
//         <p>ImageLink</p>
//         <input type={"link"} onChange={e => setCourse({ ...course, imageLink : e.target.value})} />
//         <button onClick={handleClick}>Create Course</button>
//     </div>
// }
// export default CreateCourse;
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";

function CreateCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = React.useState({
    title: "",
    description: "",
    price: 0,
    imageLink: "",
    published: false,
  });

  const jwt_token = localStorage.getItem("jwt-token");

  const handleClick = async () => {
    try {
      course.published = true;
      const res = await axios.post(
        "http://localhost:3000/admin/courses",
        course,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      console.log(res.data);
      alert("Successfully Added Course");
      navigate("/admin/courses");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 rounded-md shadow-md">
        <Typography variant="h4" align="center" gutterBottom>
          Create Course Page
        </Typography>

        <form className="space-y-4">
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            type="text"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />

          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            type="text"
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
            value={course.price}
            onChange={(e) => setCourse({ ...course, price: e.target.value })}
          />

          <TextField
            fullWidth
            label="ImageLink"
            variant="outlined"
            type="link"
            value={course.imageLink}
            onChange={(e) =>
              setCourse({ ...course, imageLink: e.target.value })
            }
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleClick}
            disableElevation
          >
            Create Course
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateCourse;