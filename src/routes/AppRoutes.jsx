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
                <Route path="/project-breake-03-Full_Stack-Client/" element={<Home />} />
                <Route path="/project-breake-03-Full_Stack-Client/projects" element={<Projects />} />
                <Route path="/project-breake-03-Full_Stack-Client/studies" element={<Studies />} />
                <Route path="/project-breake-03-Full_Stack-Client/contact" element={<Contact />} />
                <Route path="/project-breake-03-Full_Stack-Client/admin" element={<Admin />} />
            </Routes>
        </>
        </Router>
    );
}

export default AppRoutes;