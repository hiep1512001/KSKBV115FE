import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
import NamService from '../services/namServices';
import KhamSucKhoeService from '../services/khamSucKhoeService';
import PieChartBase from './BieuDoTron';
import { CHART_COLORS, DMBENH } from './../constant/index'
import BieuDoCotBase from './BieuDoCot';

const Dashboard = (props) => {
    const [yearChose, setYearChose] = useState(null)
    const [countByNam, setCountByNam] = useState(null)
    const [dataBieuLoaiSK, setDataBieuLoaiSK] = useState(null);
    const [dataSoBenh, setDataSoBenh] = useState(null)
    const [tongChiSoBatThuong, setTongChiSoBatThuong] = useState(0)

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        if (yearChose) { // 👈 Chỉ chạy khi có năm được chọn
            fetchDataCount();
            fetchDataCountLoaiBenh();
        }
    }, [yearChose])

    // === Helper: Map dữ liệu loại sức khỏe ===
    const mapHealthData = (result) => ([
        { name: "Loại I - Đủ sức khỏe", value: result?.countLoaiI ?? 0 },
        { name: "Loại II - Đủ sức khỏe", value: result?.countLoaiII ?? 0 },
        { name: "Loại III - Đủ sức khỏe", value: result?.countLoaiIII ?? 0 },
        { name: "Loại IV - Không đủ sức khỏe", value: result?.countLoaiIV ?? 0 },
    ])

    const fetchData = async () => {
        if (props.nams.length === 0) {
            try {
                const data = await NamService.getAll();
                data.sort((a, b) => b.tenNam - a.tenNam);
                props.onSetNams(data);
                // ✅ Chỉ set nếu có ít nhất 1 phần tử
                if (data.length > 0) setYearChose(data[0]); // 👈 Cập nhật trực tiếp ở đây
            } catch (error) {
                console.error('Lỗi lấy danh sách năm:', error);
            }
        } else {
            // props.nams đã có sẵn
            if (props.nams.length > 0) setYearChose(props.nams[0]);
        }
    };

    const fetchDataCount = async () => {
        try {
            const result = await KhamSucKhoeService.countByNam(yearChose.maNam);
            setCountByNam(result)
            const value = mapHealthData(result);
            setDataBieuLoaiSK(value)
        } catch (error) {
            console.error("Lỗi tìm kiếm:", error);
        }
    }

    const fetchDataCountLoaiBenh = async () => {
        try {
            const result = await KhamSucKhoeService.getLoaiBenh(yearChose.maNam);
            const data = DMBENH.map(item => ({
                name: item.ten,
                value: result[item.ma] ?? 0
            }));
            setDataSoBenh(data);
            // ✅ Sửa lỗi: set đúng giá trị tổng
            const tongValue = data.reduce((sum, item) => sum + item.value, 0);
            setTongChiSoBatThuong(tongValue)
        } catch (error) {
            console.error("Lỗi tìm kiếm:", error);
        }
    }

    // Gom mảng card để render gọn
    const cards = [
        { icon: '👨‍⚕️', label: 'Tổng người được khám', value: countByNam ? countByNam.countSoBenh : "" },
        { icon: '✅', label: 'Sức khỏe loại I', value: countByNam ? countByNam.countLoaiI : "" },
        { icon: '⚠️', label: 'Cần theo dõi', value: countByNam ? countByNam.countLoaiIV : "" },
        { icon: '📊', label: 'Chỉ số bất thường', value: tongChiSoBatThuong },
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0 fw-bold text-primary">
                    🏥 Báo cáo tổng hợp khám sức khỏe năm {yearChose != null ? yearChose.tenNam : ""}
                </h2>

            </div>

            {/* Cards Section */}
            <div className="row g-4 mb-4">
                {cards.map((item, idx) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={idx}>
                        <div className="card shadow-sm border-0 bg-light h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="me-3 fs-2 text-primary">{item.icon}</div>
                                    <div>
                                        <div className="fw-bold text-muted">{item.label}</div>
                                        <h4 className="mb-0 text-dark">{item.value ?? ""}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="row g-4">
                <div className='col-12'>
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title text-secondary mb-3">
                                📈 Biểu đồ cột các loại bệnh
                            </h5>
                            {dataSoBenh ? (
                                <BieuDoCotBase
                                    data={dataSoBenh}
                                    colors={CHART_COLORS}
                                    title="Biểu đồ cột các loại bệnh"
                                />
                            ) : (
                                <div className="text-muted small fst-italic">Đang tải biểu đồ...</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-2">
                {/* Biểu đồ cột loại sức khỏe */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm border-0 h-100 bg-light-subtle">
                        <div className="card-body">
                            <h5 className="card-title text-secondary fw-semibold mb-3 d-flex align-items-center">
                                <span className="me-2 fs-5">📋</span>
                                Biểu đồ cột loại sức khỏe
                            </h5>

                            {dataBieuLoaiSK ? (
                                <BieuDoCotBase
                                    data={dataBieuLoaiSK}
                                    colors={CHART_COLORS}
                                    title="Biểu đồ cột loại sức khỏe"
                                />
                            ) : (
                                <div className="text-muted small fst-italic">Đang tải biểu đồ...</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Biểu đồ tròn loại sức khỏe */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm border-0 h-100 bg-light-subtle">
                        <div className="card-body">
                            <h5 className="card-title text-secondary fw-semibold mb-3 d-flex align-items-center">
                                <span className="me-2 fs-5">🧬</span>
                                Biểu đồ tròn loại sức khỏe
                            </h5>
                            {dataBieuLoaiSK ? (
                                <PieChartBase
                                    data={dataBieuLoaiSK}
                                    colors={CHART_COLORS}
                                    title="Loại sức khỏe"
                                    height={300}            // chỉnh tùy card (300..380)
                                    innerRadius="38%"
                                    outerRadius="62%"
                                />
                            ) : (
                                <div className="text-muted small">Chưa có dữ liệu</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
const mapStateToProp = (state) => {
    return {
        nams: state.taskNam
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSetNams: (nams) => {
            dispatch(actions.setNam(nams));
        },
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(Dashboard);
