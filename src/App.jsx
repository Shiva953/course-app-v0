import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import EditCourse from './components/EditCourse';
import Appbar from './components/Appbar';
function App() {
    return (
        <Router>
            <Appbar />
            <Routes>
                <Route path={"/:person/"} element={<Landing />} />
                <Route path={"/:person/login"} element={<Login />} />
                <Route path={"/:person/register"} element={<Register />} />
                <Route path={"/admin/createcourse"} element={<CreateCourse />} />
                <Route path={"/:person/courses"} element={<ShowCourses />} />
                <Route path={"/admin/course/:courseId"} element={<EditCourse />} />
            </Routes>
        </Router>
    );
}

export default App;