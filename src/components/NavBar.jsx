import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <div><Link to="/">Inicio</Link></div>
            <div><Link to="/projects">Proyectos</Link></div>
            <div><Link to="/studies">Curriculum</Link></div>
            <div><Link to="/contact">Contactame </Link></div>
            <div><Link to="/admin">Admin</Link></div>
        </nav>
    );
}

export default NavBar;