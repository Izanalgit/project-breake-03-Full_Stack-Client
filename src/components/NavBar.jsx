import {Link} from 'react-router-dom';

import '../css/NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <Link to="/" className={'butNav glow'}>Inicio</Link>
            <Link to="/projects" className={'butNav glow'}>Proyectos</Link>
            <Link to="/studies" className={'butNav glow'}>Curriculum</Link>
            <Link to="/contact" className={'butNav glow'}>Contáctame </Link>
            <Link to="/admin" className={'butNav glow'}>Admin</Link>
        </nav>
    );
}

export default NavBar;