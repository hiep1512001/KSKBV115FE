import React from 'react';

const ThongKe = () => {
    return (
        <div>
            <div className="row">
                <h2 className="mb-4 fw-bold text-primary">📊 Thống kê khám sức khỏe</h2>

                <div className="col-12">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">
                            {/* Lựa chọn kiểu thống kê */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Chế độ thống kê</label>
                                <select className="form-select">
                                    <option value="">-- Chọn chế độ --</option>
                                    <option value="single">Thống kê 1 năm</option>
                                    <option value="multi">Thống kê nhiều năm</option>
                                </select>
                            </div>

                            {/* Chọn năm */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Năm</label>
                                <select className="form-select">
                                    <option value="">-- Chọn năm --</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>

                            <button className="btn btn-primary w-100 mt-2">
                                📈 Thống kê
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThongKe;
