import { useApp } from "../context/AppContext";
import { AdminProvaider } from "../context/AdminContext";

import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import ProjectsAdmin from "../components/ProjectsAdmin";
import MessagesAdmin from "../components/MessagesAdmin";

import '../css/Admin.css';
import '../css/Projects.css';
import '../css/Messages.css';

const Admin = () => {

    const {logedIn} = useApp();

    return (
    <AdminProvaider>
        <div className="adminTitle">
            <h2>Admin dashboard</h2>
            {logedIn && <LogOut />}
        </div>
        {!logedIn && <LogIn />}
        {logedIn && 
            <div className="adminCointainer">
                <div><ProjectsAdmin /></div> 
                <div><MessagesAdmin /></div>
            </div>
        }
    </AdminProvaider>
    
    )
};
  
  export default Admin;