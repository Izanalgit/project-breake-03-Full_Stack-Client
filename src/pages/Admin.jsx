import { useApp } from "../context/AppContext";
import { AdminProvaider } from "../context/AdminContext";
import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";

const Admin = () => {

    const {logedIn} = useApp();

    return (
    <>
        <h2>Admin dashboard</h2>
        <AdminProvaider>
            {!logedIn && <LogIn />}
            {logedIn && (
                
                <LogOut />
            )}
        </AdminProvaider>
    </>
    )
};
  
  export default Admin;