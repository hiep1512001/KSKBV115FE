import logo from '../static/images/appicon.svg';
import * as actions from "../actions/index";
import * as typeMenu from "../constant/index";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './Menu.css';
const Menu = (props) => {
    const menuItems = [
        { name: "Trang chủ", to: "/", type: typeMenu.MENUTRANGCHU },
        { name: "Tra cứu", to: "/TraCuu", type: typeMenu.MENUTRACUU },
        { name: "Thống kê", to: "/ThongKe", type: typeMenu.MENUTHONGKE }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" onClick={() => { props.onHandleChooseMenu(typeMenu.MENUTRANGCHU) }}>BVND115</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menuItems.map(item => (
                            <li className="nav-item" key={item.type}>
                                <Link
                                    to={item.to}
                                    className={`nav-link ${props.selectedMenu === item.type ? "active" : ""}`}
                                    onClick={() => props.onHandleChooseMenu(item.type)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <img src={logo} alt="App Logo" className="rounded-circle" style={{ width: "35px" }} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedMenu: state.taskMenu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleChooseMenu: (menu) => {
            dispatch(actions.choseMenu(menu));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
