import React from 'react';
import BieuDoCot from './BieuDoCot';
import BieuDoTron from './BieuDoTron';
import BieuDoCotNam from './BieuDoCotNam';

const Dashboard = () => {
    return (
        <div className="container py-4">
            <h2 className="mb-4 fw-bold">🏥❤️115 Khám Sức Khỏe Năm 2025</h2>
            {/* Cards Section */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-primary text-white p-3 rounded shadow-sm">
                        <div className="fw-bold">Thiết bị hoạt động</div>
                        <h3>320</h3>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-danger text-white p-3 rounded shadow-sm">
                        <div className="fw-bold">Thiết bị lỗi</div>
                        <h3>12</h3>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-success text-white p-3 rounded shadow-sm">
                        <div className="fw-bold">Số lượt truy cập</div>
                        <h3>1,254</h3>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="bg-warning text-dark p-3 rounded shadow-sm">
                        <div className="fw-bold">Báo cáo tuần</div>
                        <h3>18</h3>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="row g-4">
                <div className='col-12'>
                    <div className="bg-white border rounded p-3 shadow-sm">
                        <h5 className="mb-3">Sản lượng hạt theo quốc gia</h5>
                        <BieuDoCotNam></BieuDoCotNam>
                    </div>
                </div>
            </div>
            <div className="row g-4 mt-2">
                <div className="col-12 col-lg-6">
                    <div className="bg-white border rounded p-3 shadow-sm">
                        <h5 className="mb-3">Sản lượng hạt theo quốc gia</h5>
                        <BieuDoCot />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="bg-white border rounded p-3 shadow-sm">
                        <h5 className="mb-3">Thị phần trình duyệt</h5>
                        <BieuDoTron />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
