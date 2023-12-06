import {Link, NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function Nav() {
    const loginState = useSelector(state => state.loginSlice)

    return (
        <div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <Link to="/" className="logo">
                                    <img src="logo.png" alt="true"/>
                                </Link>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/donate">Donate</NavLink></li>
                                    {/*{loginState.email ? // 로그인한 사용자만 출력되는 메뉴*/}
                                    {/*    <>*/}
                                    {/*        <li><NavLink to="/chat">Chat</NavLink></li>*/}
                                    {/*        <li><NavLink to="/logout">Logout</NavLink></li>*/}
                                    {/*    </>*/}
                                    {/*    :*/}
                                    {/*    <></>*/}
                                    {/*}*/}
                                    {!loginState.email ?
                                        <>
                                            <li><NavLink to="/signup">SigUp</NavLink></li>
                                            <li><NavLink to="/user/login">LogIn</NavLink></li>
                                        </>
                                        :
                                        <>
                                            <li><NavLink to="/chat">Chat</NavLink></li>
                                            <li><NavLink to="/logout">Logout</NavLink></li>
                                        </>
                                    }
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

            <Outlet/>
        </div>
    )
}

export default Nav;