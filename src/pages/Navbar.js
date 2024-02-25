import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return <nav className="nav">
        <Link to="/"className="site-title">
            Alan's Portfolio
        </Link>
        <ul>
            <CustomLink to=""></CustomLink>
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Projects">Projects</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>          
        </ul>
    </nav>
}

function CustomLink( { to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

