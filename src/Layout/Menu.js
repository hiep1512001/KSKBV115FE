
import logo from '../static/images/appicon.svg'
import * as actions from "../actions/index"
import * as typeMenu from "../constant/index"
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
const Menu = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">BVND115</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={props.isSelectMenu === typeMenu.MENUTRANGCHU ? "nav-link active" : "nav-link "} aria-current="page" href="#" onClick={() => { props.onHandelChoseMenu(typeMenu.MENUTRANGCHU) }}>Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/TraCuu" className={props.isSelectMenu === typeMenu.MENUTRACUU ? "nav-link active" : "nav-link "} onClick={() => { props.onHandelChoseMenu(typeMenu.MENUTRACUU) }} aria-current="page" href="#">Tra cứu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ThongKe" className={props.isSelectMenu === typeMenu.MENUTHONGKE ? "nav-link active" : "nav-link "} onClick={() => { props.onHandelChoseMenu(typeMenu.MENUTHONGKE) }} href="#">Thống kê</Link>
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
const mapStateToProp = (state) => {
    return {
        isSelectMenu: state.taskMenu
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onHandelChoseMenu: (menu) => {
            dispatch(actions.choseMenu(menu));
        },
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(Menu) 