// src/components/Login.jsx
import { useState } from "react";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        // e.preventDefault();
        // alert(`Email: ${email}\nPassword: ${password}`);
        // // TODO: Gửi thông tin đăng nhập đến server
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
                <div className="text-center mb-4">
                    <h3 className="fw-bold text-primary">Đăng nhập</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Tên đăng nhập</label>
                        <input
                            className="form-control"
                            placeholder=""
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
