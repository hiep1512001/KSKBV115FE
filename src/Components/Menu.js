import { useState } from "react"
import logo from '../static/images/appicon.svg'
const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BVND115</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className={activeMenu ? "nav-link" : "nav-link active"} aria-current="page" href="#">Tra cứu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thống kê</a>
                        </li>
                    </ul>
                    <div>
                        <img src={logo} style={{ width: "35px", borderRadius: "50%" }} ></img>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Menu