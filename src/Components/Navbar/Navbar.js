import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className={css.nav}>
            <div className={css.nav__inner}>
                <Link className={css.nav__logo} to="/">
                    
                </Link>
                <div className={css.nav__login}>
                    <h3>LogIn</h3>
                    <i className="fas fa-user-ninja"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;