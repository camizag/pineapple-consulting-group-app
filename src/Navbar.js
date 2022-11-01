import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img src="Logos_Logo primario Verde.png" alt="Logo de Pineapple Consulting Group" className="title-logo"></img>
            </Link>
            <ul>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}