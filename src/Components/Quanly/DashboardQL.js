import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"; // css riêng cho sidebar

const DashboardQL = () => {
    const [active, setActive] = useState("Trang chủ");

    const menuItems = [
        { name: "Trang chủ", icon: "🏠" },
        { name: "Nhân viên", icon: "👤" },
        { name: "Sản phẩm", icon: "📦" },
        { name: "Đơn hàng", icon: "🛒" },
        { name: "Báo cáo", icon: "📊" },
    ];

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <nav className="sidebar d-flex flex-column p-3">
                <h4 className="text-white">Quản lý</h4>
                <hr className="text-secondary" />
                <ul className="nav nav-pills flex-column mb-auto">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button
                                className={`nav-link w-100 text-start ${active === item.name ? "active" : ""
                                    }`}
                                onClick={() => setActive(item.name)}
                            >
                                {item.icon} {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content */}
            <div className="content flex-grow-1 p-3 bg-light">
                <button
                    className="btn btn-secondary d-md-none mb-3"
                    onClick={() =>
                        document.querySelector(".sidebar").classList.toggle("show")
                    }
                >
                    ☰ Menu
                </button>

                <h2>{active}</h2>
                <div className="card">
                    <div className="card-body">
                        Đây là màn hình hiển thị: <strong>{active}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardQL;
