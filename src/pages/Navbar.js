import { Link, useMatch, useResolvedPath } from "react-router-dom"
import StarField from "./StarField"
import { IoHomeOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Navbar(){
    return <nav className="nav">
        <ul>
            <Link to="/"className="title">Alan Zhang</Link>
        </ul>

        <StarField></StarField>

        <ul>

            <CustomLink to=""></CustomLink>

            <CustomLink to="/Home"> 
                <IoHomeOutline className="link-icon" /> Home
            </CustomLink>
            
            <CustomLink to="/Projects">
                <AiOutlineFundProjectionScreen className="link-icon" /> Projects
            </CustomLink>

            <CustomLink to="/Resume">
                <GrDocumentText className="link-icon" /> Resume
            </CustomLink>

            <CustomLink to="/Contact">
                <BsTelephone className="link-icon" /> Contact
            </CustomLink>  
                    
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

