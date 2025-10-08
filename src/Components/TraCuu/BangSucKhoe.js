import { useState, useEffect } from "react";

const BangSucKhoe = ({ data }) => {
    const [info, setInfo] = useState(data);
    // Đồng bộ khi props.data thay đổi
    useEffect(() => {
        setInfo(data);
    }, [data]);
    return (
        <div className="container my-3">
            {/* Thông tin nhân viên */}
            <div className="card shadow-sm mb-3">
                <div className="card-header bg-success text-white">
                    Thông tin nhân viên
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover mb-0 align-middle">
                            <thead className="table-success">
                                <tr>
                                    <th>Họ và Tên</th>
                                    <th>Năm Sinh</th>
                                    <th>Khoa Phòng</th>
                                    <th>Giới tính</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{info.nhanVien.hoTen}</td>
                                    <td>{info.nhanVien.ngaySinh}</td>
                                    <td>{info.nhanVien.khoaPhong.tenKhoaPhong}</td>
                                    <td>{info.nhanVien.gioiTinh === "0" ? "Nữ" : "Nam"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 mb-2">
                    <td>
                        <strong>Chiều cao:</strong> {info.chieuCao} cm
                    </td>
                </div>
                <div className="col-4 mb-2">
                    <td>
                        <strong>Mạch:</strong> {info.mach} /phút
                    </td>
                </div>
                <div className="col-4 mb-2">
                    <strong>Không khám:</strong>
                    <input
                        type="checkbox"
                        checked={info.ckKham === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>

                <div className="col-4 mb-2">
                    <strong>Cân nặng:</strong> {info.canNang} kg
                </div>
                <div className="col-4 mb-2">
                    <strong>Huyết áp TD/TT:</strong> {info.huyetApTD}/{info.huyetApTT} mmHg
                </div>
                <div className="col-4 mb-2">
                    <strong>Phân loại sức khỏe:</strong> {info.loaiSucKhoe.tenLoai}
                </div>
            </div>
            <div className="row">
                <div className="col-2 mb-2">
                    <u><strong>Khám</strong></u>
                </div>
                <div className="col-2 mb-2">
                    <u><strong>Kết quả khám</strong></u>
                </div>
                <div className="col-2 mb-2">
                    <u><strong>Lưu ý</strong></u>
                </div>
                <div className="col-2 mb-2">
                    <u><strong>Khám</strong></u>
                </div>
                <div className="col-2 mb-2">
                    <u><strong>Kết quả khám</strong></u>
                </div>
                <div className="col-2 mb-2">
                    <u><strong>Lưu ý</strong></u>
                </div>
                <div className="col-2 mb-2">
                    Tuần hoàn
                </div>
                <div className="col-2 mb-2">
                    {info.tuanHoan}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckTuanHoan === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Nội tiết
                </div>
                <div className="col-2 mb-2">
                    {info.noiTiet}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckNoiTiet === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Hô hấp
                </div>
                <div className="col-2 mb-2">
                    {info.hoHap}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckHoHap === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Da liễu
                </div>
                <div className="col-2 mb-2">
                    {info.daLieu}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckDalieu === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Tiêu hóa
                </div>
                <div className="col-2 mb-2">
                    {info.tieuHoa}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckTieuhoa === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Phụ khoa
                </div>
                <div className="col-2 mb-2">
                    {info.phuKhoa}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckPhuKhoa === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>

                <div className="col-2 mb-2">
                    Thận TN - SD
                </div>
                <div className="col-2 mb-2">
                    {info.than_TN_SD}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckThan_TN_SD === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Mắt
                </div>
                <div className="col-2 mb-2">
                    {info.mat}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckMat === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>

                <div className="col-2 mb-2">
                    Thần kinh
                </div>
                <div className="col-2 mb-2">
                    {info.thanKinh}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckThanKinh === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>
                <div className="col-2 mb-2">
                    Tai mũi họng
                </div>
                <div className="col-2 mb-2">
                    {info.taiMuiHong}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckTaiMuiHong === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>

                <div className="col-2 mb-2">
                    Tâm thần
                </div>
                <div className="col-2 mb-2">
                    {info.tamThan}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckTamThan === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    /></div>
                <div className="col-2 mb-2">
                    Răng
                </div>
                <div className="col-2 mb-2">
                    {info.rangHamMat}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckRangHamMat === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>

                <div className="col-2 mb-2">
                    Hệ vận động
                </div>
                <div className="col-2 mb-2">
                    {info.heVanDong}
                </div>
                <div className="col-2 mb-2">
                    <input
                        type="checkbox"
                        checked={info.ckHeVanDong === "-1"} // true nếu info.ckKham =1
                        readOnly // nếu không có onChange, thêm readOnly để tránh lỗi warning
                    />
                </div>

                <div className="col-2 mb-2">
                    Ghi chú
                </div>
                <div className="col-2 mb-2">
                    {info.ghiChu}
                </div>

            </div>
        </div>
    );
};

export default BangSucKhoe;
