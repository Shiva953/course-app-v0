import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { Box, Button, Typography, Card, CardContent, CardMedia } from "@mui/material";

function ShowCourses() {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const { person } = useParams();
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem("jwt-token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/courses", {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        });
        setCourses(res.data.courses);
  
        if (person === "user") {
          const purchasedRes = await axios.get("http://localhost:3000/user/purchasedCourses", {
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
        `http://localhost:3000/user/courses/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      console.log(res.data.purchasedCourses);
      setPurchasedCourses(res.data.purchasedCourses)
      alert(`COURSE PURCHASED SUCCESSFULLY`);
    } catch (err) {
      console.error(err);
    }
  };

  function Course(props) {
    const navigate = useNavigate();

    return (
      <Card className="w-80 rounded-lg overflow-hidden shadow-lg m-4">
        <CardMedia
          component="img"
          height="140"
          image={props.imageLink}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="font-inter">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="font-inter">
            {props.description}
          </Typography>
          {props.person === "admin" ? (
            <Button
              variant="contained"
              className="my-4 px-4 bg-blue-500 text-white rounded"
              onClick={() => {
                navigate(`/admin/course/${props.id}`);
              }}
            >
              SHOW CONTENTS
            </Button>
          ) : (
            <>
              {!props.purchasedCoursesIfUser ? (
                <Button
                  variant="contained"
                  className="my-4 px-4 bg-blue-500 text-white rounded"
                  onClick={() => {
                    props.purchaseCourse(props.id);
                  }}
                >
                  PURCHASE COURSE
                </Button>
              ) : (
                <Typography variant="body2" color="text.secondary" className="font-inter">
                  ALREADY PURCHASED
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </Card>
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