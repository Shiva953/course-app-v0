import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import EditCourse from './components/EditCourse';
import Appbar from './components/Appbar';
import Entrypage from './components/Entrypage';

function App() {
    return (
        <div style={{width: "100vw",
            height: "100vh",}}
        >
        <Router>
            <Appbar />
            <Routes>
                <Route path={"/"} element={<Entrypage />} />
                <Route path={"/:person/"} element={<Landing />} />
                <Route path={"/:person/login"} element={<Login />} />
                <Route path={"/:person/register"} element={<Register />} />
                <Route path={"/admin/createcourse"} element={<CreateCourse />} />
                <Route path={"/:person/courses"} element={<ShowCourses />} />
                <Route path={"/admin/course/:courseId"} element={<EditCourse />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;