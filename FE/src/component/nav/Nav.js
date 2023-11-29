import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <Link to="index.html" className="logo">
                                <img src="../../assets/images/logo.png" alt />
                            </Link>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li><NavLink to="index.html">Home</NavLink></li>
                                <li><NavLink to="about.html">About</NavLink></li>
                                <li><NavLink to="deals.html">Deals</NavLink></li>
                                <li><NavLink to="reservation.html">Reservation</NavLink></li>
                                <li><NavLink to="reservation.html">Book Yours</NavLink></li>
                            </ul>
                            <NavLink className="menu-trigger">
                                <span>Menu</span>
                            </NavLink>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;