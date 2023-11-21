// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { Box, Button, Typography, Card, CardContent, CardMedia } from "@mui/material";

// function ShowCourses() {
//   const [courses, setCourses] = useState([]);
//   const [purchasedCourses, setPurchasedCourses] = useState([]);
//   const { person } = useParams();
//   const navigate = useNavigate();
//   const jwt_token = localStorage.getItem("jwt-token");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/admin/courses", {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         });
//         setCourses(res.data.courses);
  
//         if (person === "user") {
//           const purchasedRes = await axios.get("http://localhost:3000/user/purchasedCourses", {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//           });
//           setPurchasedCourses(purchasedRes.data.purchasedCourses);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
  
//     if (jwt_token) {
//       fetchData();
//     }
//   }, [jwt_token, person, purchasedCourses]);
  

//   const purchaseCourse = async (id) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:3000/user/courses/${id}`,
//         null,
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         }
//       );
//       console.log(res.data.purchasedCourses);
//       setPurchasedCourses(res.data.purchasedCourses)
//       alert(`COURSE PURCHASED SUCCESSFULLY`);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   function Course(props) {
//     const navigate = useNavigate();

//     return (
//       <Card className="w-80 rounded-lg overflow-hidden shadow-lg m-4">
//         <CardMedia
//           component="img"
//           height="140"
//           image={props.imageLink}
//           alt={props.title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div" className="font-inter">
//             {props.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" className="font-inter">
//             {props.description}
//           </Typography>
//           {props.person === "admin" ? (
//             <Button
//               variant="contained"
//               className="my-4 px-4 bg-blue-500 text-white rounded"
//               onClick={() => {
//                 navigate(`/admin/course/${props.id}`);
//               }}
//             >
//               SHOW CONTENTS
//             </Button>
//           ) : (
//             <>
//               {!props.purchasedCoursesIfUser ? (
//                 <Button
//                   variant="contained"
//                   className="my-4 px-4 bg-blue-500 text-white rounded"
//                   onClick={() => {
//                     props.purchaseCourse(props.id);
//                   }}
//                 >
//                   PURCHASE COURSE
//                 </Button>
//               ) : (
//                 <Typography variant="body2" color="text.secondary" className="font-inter">
//                   ALREADY PURCHASED
//                 </Typography>
//               )}
//             </>
//           )}
//         </CardContent>
//       </Card>
//     );
//   }

//   Course.propTypes = {
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     person: PropTypes.string.isRequired,
//     purchasedCoursesIfUser: PropTypes.bool.isRequired,
//     purchaseCourse: PropTypes.func.isRequired,
//     description: PropTypes.string.isRequired,
//     imageLink: PropTypes.string.isRequired,
//   };

//   return (
//     <Box className="bg-black p-8">
//       <Typography variant="h2" gutterBottom className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8 font-inter">
//         Your Courses
//       </Typography>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.map((c) => (
//           <Course
//             title={c.title}
//             key={c._id}
//             id={c._id}
//             description={c.description}
//             price={c.price}
//             imageLink={c.imageLink}
//             published={c.published}
//             person={person}
//             purchasedCoursesIfUser={purchasedCourses.some((co) => co._id === c._id)}
//             purchaseCourse={purchaseCourse}
//           />
//         ))}
//       </div>
//       {person === "admin" ? (
//         <Button
//           variant="contained"
//           className="my-4 px-4 bg-blue-500 text-white rounded"
//           onClick={() => {
//             navigate("/admin/createcourse");
//           }}
//         >
//           CREATE A COURSE
//         </Button>
//       ) : (
//         <></>
//       )}
//     </Box>
//   );
// }

// export default ShowCourses;
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { Box, Button, Typography } from "@mui/material";

// function ShowCourses() {
//   const [courses, setCourses] = useState([]);
//   const [purchasedCourses, setPurchasedCourses] = useState([]);
//   const { person } = useParams();
//   const navigate = useNavigate();
//   const jwt_token = localStorage.getItem("jwt-token");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/admin/courses", {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         });
//         setCourses(res.data.courses);

//         if (person === "user") {
//           const purchasedRes = await axios.get("http://localhost:3000/user/purchasedCourses", {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//           });
//           setPurchasedCourses(purchasedRes.data.purchasedCourses);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     if (jwt_token) {
//       fetchData();
//     }
//   }, [jwt_token, person, purchasedCourses]);

//   const purchaseCourse = async (id) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:3000/user/courses/${id}`,
//         null,
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         }
//       );
//       console.log(res.data.purchasedCourses);
//       setPurchasedCourses(res.data.purchasedCourses);
//       alert(`COURSE PURCHASED SUCCESSFULLY`);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   function Course(props) {
//     const navigate = useNavigate();

//     return (
//       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <a href="#">
//           <img className="rounded-t-lg" src={props.imageLink} alt={props.title} />
//         </a>
//         <div className="p-5">
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-inter">
//               {props.title}
//             </h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-inter">{props.description}</p>
//           {props.person === "admin" ? (
//             <Button
//               variant="contained"
//               className="my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-inter"
//               onClick={() => {
//                 navigate(`/admin/course/${props.id}`);
//               }}
//             >
//               SHOW CONTENTS
//               <svg
//                 className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </Button>
//           ) : (
//             <>
//               {!props.purchasedCoursesIfUser ? (
//                 <Button
//                   variant="contained"
//                   className="my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-inter"
//                   onClick={() => {
//                     props.purchaseCourse(props.id);
//                   }}
//                 >
//                   PURCHASE COURSE
//                   <svg
//                     className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </Button>
//               ) : (
//                 <div className="mb-3 dark:text-gray-400 border-l-gray-dark text-green font-extrabold font">ALREADY PURCHASED</div>

//               )}
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }

//   Course.propTypes = {
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     person: PropTypes.string.isRequired,
//     purchasedCoursesIfUser: PropTypes.bool.isRequired,
//     purchaseCourse: PropTypes.func.isRequired,
//     description: PropTypes.string.isRequired,
//     imageLink: PropTypes.string.isRequired,
//   };

//   return (
//     <Box className="bg-black p-8">
//       <Typography variant="h2" gutterBottom className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8 font-inter">
//         Your Courses
//       </Typography>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.map((c) => (
//           <Course
//             title={c.title}
//             key={c._id}
//             id={c._id}
//             description={c.description}
//             price={c.price}
//             imageLink={c.imageLink}
//             published={c.published}
//             person={person}
//             purchasedCoursesIfUser={purchasedCourses.some((co) => co._id === c._id)}
//             purchaseCourse={purchaseCourse}
//           />
//         ))}
//       </div>
//       {person === "admin" ? (
//         <Button
//           variant="contained"
//           className="my-4 px-4 bg-blue-500 text-white rounded"
//           onClick={() => {
//             navigate("/admin/createcourse");
//           }}
//         >
//           CREATE A COURSE
//         </Button>
//       ) : (
//         <></>
//       )}
//     </Box>
//   );
// }

// export default ShowCourses;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";

function ShowCourses() {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const { person } = useParams();
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem("jwt-token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://ncapp97341-backend.vercel.app/admin/courses", {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        });
        setCourses(res.data.courses);

        if (person === "user") {
          const purchasedRes = await axios.get("http://ncapp97341-backend.vercel.app/user/purchasedCourses", {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
          });
          setPurchasedCourses(purchasedRes.data.purchasedCourses);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (jwt_token) {
      fetchData();
    }
  }, [jwt_token, person, purchasedCourses]);

  const purchaseCourse = async (id) => {
    try {
      const res = await axios.post(
        `http://ncapp97341-backend.vercel.app/user/courses/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      console.log(res.data.purchasedCourses);
      setPurchasedCourses(res.data.purchasedCourses);
      alert(`COURSE PURCHASED SUCCESSFULLY`);
    } catch (err) {
      console.error(err);
    }
  };

  function Course(props) {
    const navigate = useNavigate();

    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={props.imageLink} alt={props.title} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-inter">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-inter">{props.description}</p>
          {props.person === "admin" ? (
            <Button
              variant="contained"
              style={{
                borderRadius: "9999px", // Max roundness
                backgroundImage: "linear-gradient(to right, #8B5CF6, #6366F1)", // Purple to blue gradient
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Shadow effect
              }}
              className="my-4 px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-violet-800 via-violet-900 to-blue-800 rounded-full hover:ring-4 hover:ring-blue-300 focus:outline-none focus:ring-blue-300 dark:bg-gradient-to-r dark:from-violet-700 dark:via-violet-800 dark:to-blue-700 dark:hover:ring-blue-500 font-inter"
              onClick={() => {
                navigate(`/admin/course/${props.id}`);
              }}
            >
              SHOW CONTENTS
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
          ) : (
            <>
              {!props.purchasedCoursesIfUser ? (
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "9999px", // Max roundness
                    backgroundImage: "linear-gradient(to right, #8B5CF6, #6366F1)", // Purple to blue gradient
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Shadow effect
                  }}
                  className="my-4 px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-violet-800 via-violet-900 to-blue-800 rounded-full hover:ring-4 hover:ring-blue-300 focus:outline-none focus:ring-blue-300 dark:bg-gradient-to-r dark:from-violet-700 dark:via-violet-800 dark:to-blue-700 dark:hover:ring-blue-500 font-inter"
                  onClick={() => {
                    props.purchaseCourse(props.id);
                  }}
                >
                  PURCHASE COURSE
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Button>
              ) : (
                <div className="mb-3 dark:text-gray-400 border-l-gray-dark text-green font-extrabold font">ALREADY PURCHASED</div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  Course.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
    purchasedCoursesIfUser: PropTypes.bool.isRequired,
    purchaseCourse: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  };

  return (
    <Box className="bg-black p-8">
      <Typography variant="h2" gutterBottom className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8 font-inter">
        Your Courses
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <Course
            title={c.title}
            key={c._id}
            id={c._id}
            description={c.description}
            price={c.price}
            imageLink={c.imageLink}
            published={c.published}
            person={person}
            purchasedCoursesIfUser={purchasedCourses.some((co) => co._id === c._id)}
            purchaseCourse={purchaseCourse}
          />
        ))}
      </div>
      {person === "admin" ? (
        <Button
          variant="contained"
          style={{
            borderRadius: "9999px", // Max roundness
            backgroundImage: "linear-gradient(to right, #8B5CF6, #6366F1)", // Purple to blue gradient
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Shadow effect
          }}
          className="my-4 px-4 bg-blue-500 text-white rounded"
          onClick={() => {
            navigate("/admin/createcourse");
          }}
        >
          CREATE A COURSE
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default ShowCourses;