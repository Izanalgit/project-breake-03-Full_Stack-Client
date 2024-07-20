import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Studies from "../pages/Studies";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

const AppRoutes = () =>{
    return(
        <Router>
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/studies" element={<Studies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </>
        </Router>
    );
}

export default AppRoutes;