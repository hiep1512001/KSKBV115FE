// src/components/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container text-center d-flex align-items-center justify-content-center vh-100">
            <div>
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-3">😢 <span className="text-dark">Trang không tồn tại</span></p>
                <p className="lead">Có thể bạn đã nhập sai đường dẫn hoặc trang đã bị xóa.</p>
                <Link to="/" className="btn btn-primary mt-3">
                    Quay về trang chủ
                </Link>
            </div>
        </div>
    );
}
