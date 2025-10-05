import React from 'react';
import BieuDoCot from './BieuDoCot';
import BieuDoTron from './BieuDoTron';
import BieuDoCotNam from './BieuDoCotNam';

const Dashboard = () => {
    return (
        <div className="container py-4">
            <h2 className="mb-4 fw-bold text-primary">
                🏥 Báo cáo tổng hợp khám sức khỏe năm 2025
            </h2>

            {/* Cards Section */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm border-0 bg-light h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="me-3 fs-2 text-primary">👨‍⚕️</div>
                                <div>
                                    <div className="fw-bold text-muted">Tổng người được khám</div>
                                    <h4 className="mb-0 text-dark">1,245</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm border-0 bg-light h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="me-3 fs-2 text-success">✅</div>
                                <div>
                                    <div className="fw-bold text-muted">Sức khỏe loại A</div>
                                    <h4 className="mb-0 text-dark">68%</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm border-0 bg-light h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="me-3 fs-2 text-warning">⚠️</div>
                                <div>
                                    <div className="fw-bold text-muted">Cần theo dõi</div>
                                    <h4 className="mb-0 text-dark">34</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm border-0 bg-light h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="me-3 fs-2 text-danger">📊</div>
                                <div>
                                    <div className="fw-bold text-muted">Chỉ số bất thường</div>
                                    <h4 className="mb-0 text-dark">128</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="row g-4">
                <div className='col-12'>
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title text-secondary mb-3">
                                📈 Xu hướng sức khỏe theo năm
                            </h5>
                            <BieuDoCotNam />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-2">
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-secondary mb-3">
                                📋 Phân loại sức khỏe (A/B/C/D)
                            </h5>
                            <BieuDoCot />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-secondary mb-3">
                                🧬 Tỷ lệ bệnh thường gặp
                            </h5>
                            <BieuDoTron />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
