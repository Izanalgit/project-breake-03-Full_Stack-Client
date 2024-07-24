import { useApp } from "../context/AppContext";
import { AdminProvaider } from "../context/AdminContext";

import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import ProjectsAdmin from "../components/ProjectsAdmin";

const Admin = () => {

    const {logedIn} = useApp();

    return (
    <>
        <h2>Admin dashboard</h2>
        <AdminProvaider>
            {!logedIn && <LogIn />}
            {logedIn && <> 
                <LogOut />
                <ProjectsAdmin />
            </>}
        </AdminProvaider>
    </>
    )
};
  
  export default Admin;