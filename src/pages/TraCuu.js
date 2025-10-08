import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import Alert from '../Components/Alert';
import NamService from '../services/namServices';
import KhamSucKhoeService from '../services/khamSucKhoeService';
import PaginatedTable from '../Components/PaginatedTable';
import BangSucKhoe from '../Components/TraCuu/BangSucKhoe';


const TraCuu = (props) => {
    const [searchTenNV, setSearchTenVN] = useState("");
    const [searchNam, setSearchNam] = useState("");
    const [alert, setAlert] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [dataKSK, setDataKSK] = useState([]);
    const [thongTinKSKCT, setThongtinKSKCT] = useState(null);
    const handleView = (item) => {
        setThongtinKSKCT(item)
        console.log(item)
    };

    // Lấy dữ liệu năm
    useEffect(() => {
        const fetchNams = async () => {
            if (props.nams.length === 0) {
                const data = await NamService.getAll();
                data.sort((a, b) => b.tenNam - a.tenNam);
                props.onSetNams(data);
            }
        };
        fetchNams();
    }, [props.nams, props]);

    // Xử lý tìm kiếm
    const onHandlSearchNV = async () => {
        if (searchNam === "") {
            setAlert({ type: "danger", message: "Chưa chọn năm!" });
            return;
        }
        if (searchTenNV === "") {
            setAlert({ type: "danger", message: "Chưa điền tên nhân viên!" });
            return;
        }

        setAlert({ type: "", message: "" });
        setLoading(true);
        try {
            const result = await KhamSucKhoeService.search({ maNam: searchNam, ten: searchTenNV });
            setDataKSK(result);
        } catch (error) {
            console.error("Lỗi tìm kiếm:", error);
            setAlert({ type: "danger", message: "Lỗi khi tìm kiếm dữ liệu." });
        } finally {
            setLoading(false);
        }
    };

    const elementSelect = () => {
        const nams = props?.nams ?? [];
        if (!nams || nams.length === 0) return <p>Không có dữ liệu năm</p>;

        return (
            <select
                onChange={(e) => setSearchNam(e.target.value)}
                value={searchNam}
                className="form-select"
            >
                <option value="">Vui lòng chọn năm</option>
                {nams.map((value, index) => (
                    <option key={index} value={value.maNam}>
                        {value.tenNam}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <div>
            <Alert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert({ type: "", message: "" })}
            />

            <div className="row">
                {/* Vùng Tìm kiếm */}
                <div className="col-12 col-md-4 mb-4 d-flex">
                    <div className="card shadow border-0 flex-fill">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-primary mb-4">👨‍💼 Tìm nhân viên</h5>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Năm</label>
                                {elementSelect()}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Tên nhân viên</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập tên nhân viên..."
                                    value={searchTenNV}
                                    onChange={(e) => setSearchTenVN(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-primary w-100 mt-2"
                                onClick={onHandlSearchNV}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Đang tìm...
                                    </>
                                ) : (
                                    "🔍 Tìm kiếm"
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Vùng Danh sách */}
                <div className="col-12 col-md-8 mb-4 d-flex">
                    <div className="card shadow border-0 flex-fill">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-primary mb-4">📝 Danh sách nhân viên</h5>

                            {/* Scroll bảng */}
                            <div style={{ flex: 1, overflowY: "auto" }}>
                                <PaginatedTable data={dataKSK} rowsPerPage={3} onView={handleView} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kết quả sức khỏe */}
            <div className="row">
                <div className="col-12">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-primary mb-4">📋 Kết quả sức khỏe</h5>
                            {thongTinKSKCT ? (
                                <BangSucKhoe data={thongTinKSKCT} />
                            ) : (
                                <div className='alert alert-success'>Không có dữ liệu!</div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProp = (state) => ({
    nams: state.taskNam,
});

const mapDispatchToProps = (dispatch) => ({
    onSetNams: (nams) => dispatch(actions.setNam(nams)),
});

export default connect(mapStateToProp, mapDispatchToProps)(TraCuu);
