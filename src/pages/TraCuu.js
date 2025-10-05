

import { useState } from 'react';
import { connect } from 'react-redux';
const TraCuu = (props) => {
    const [searchTenNV, setSearchTenVN] = useState("");
    const onHandlSearchNV = () => {
        if (searchTenNV === "") {
            alert("Vui lòng nhập tên nhân viên cần tìm!")
        }
        else {
            alert("Gửi tên: " + searchTenNV)
        }
    }
    const elementSelect = () => {
        const nams = props?.nams ?? [];
        if (!nams || nams.length === 0) {
            return <p>Không có dữ liệu năm</p>;
        }
        const elementNam = nams.map((value, index) => (
            <option key={index} value={value.maNam}>
                {value.tenNam}
            </option>
        ));

        return (
            <select className="form-select">
                {elementNam}
            </select>
        );
    }
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
                                {elementSelect()}
                            </div>

                            {/* Tìm tên */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Tên nhân viên</label>
                                <input
                                    value={searchTenNV}
                                    onChange={(e) => setSearchTenVN(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập tên nhân viên..."
                                />
                            </div>
                            <button className="btn btn-primary w-100 mt-2" onClick={onHandlSearchNV}>
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
const mapStateToProp = (state) => {
    return {
        nams: state.taskNam
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};
export default connect(mapStateToProp, mapDispatchToProps)(TraCuu);
