import React from 'react';
import { connect } from 'react-redux';

const ThongKe = (props) => {
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
                                {elementSelect()}
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
const mapStateToProp = (state) => {
    return {
        nams: state.taskNam
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};
export default connect(mapStateToProp, mapDispatchToProps)(ThongKe);
