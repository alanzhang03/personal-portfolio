import { Link, useMatch, useResolvedPath } from "react-router-dom"
import StarField from "./StarField"
import { FaHouseChimney } from "react-icons/fa6";



export default function Navbar(){
    return <nav className="nav">
        <ul>
            <Link to="/"className="title">Alan Zhang</Link>
        </ul>
        <StarField></StarField>
        <ul>
            <CustomLink to=""></CustomLink>
            <CustomLink to="/Home"><FaHouseChimney /> Home</CustomLink>
            <CustomLink to="/Resume">Resume</CustomLink>
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

