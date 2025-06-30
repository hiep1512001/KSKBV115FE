import React from 'react';

const TraCuu = () => {
    return (
        <div>
            <div className="row">
                {/* VÙNG TRÁI: Tìm kiếm */}
                <div className="col-12 col-md-4 mb-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-primary mb-4">👨‍💼 Tìm nhân viên</h5>

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

                            {/* Tìm tên */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Tên nhân viên</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập tên nhân viên..."
                                />
                            </div>

                            <button className="btn btn-primary w-100 mt-2">
                                🔍 Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>

                {/* VÙNG PHẢI: Kết quả */}
                <div className="col-12 col-md-8 mb-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-primary mb-4">📝 Danh sách nhân viên</h5>

                            <div className="alert alert-info">
                                Vui lòng chọn nhân viên để hiển thị kết quả sức khỏe.
                            </div>
                            {/* Chỗ này sẽ thay bằng kết quả sau */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-primary mb-4">📋 Kết quả sức khỏe</h5>

                            <div className="alert alert-info">
                                Vui lòng chọn nhân viên để hiển thị kết quả sức khỏe.
                            </div>
                            {/* Chỗ này sẽ thay bằng kết quả sau */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TraCuu;
