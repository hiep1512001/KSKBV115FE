import React, { useState, useEffect } from "react";
import "./PaginatedTable.css";

const PaginatedTable = ({ data, rowsPerPage = 5, onView }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Reset trang về 1 khi data thay đổi
    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = data.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const getPaginationButtons = () => {
        const buttons = [];
        const maxButtons = 5;

        if (totalPages <= maxButtons) {
            for (let i = 1; i <= totalPages; i++) buttons.push(i);
        } else {
            if (currentPage <= 3) {
                buttons.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                buttons.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                buttons.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return buttons;
    };

    return (
        <div className="paginated-table-container mt-3">
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-striped table-bordered align-middle mb-0">
                    <thead className="table-warning">
                        <tr>
                            <th>Họ tên</th>
                            <th>Năm sinh</th>
                            <th>Khoa phòng</th>
                            <th className="text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="Họ tên">{item.nhanVien.hoTen}</td>
                                    <td data-label="Năm sinh">{item.nhanVien.ngaySinh}</td>
                                    <td data-label="Khoa phòng">{item.nhanVien.khoaPhong.tenKhoaPhong}</td>
                                    <td data-label="Thao tác" className="text-center">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => onView(item)}
                                        >
                                            👁️ Xem
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-3">
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="pagination-container mt-3 d-flex justify-content-center align-items-center flex-wrap gap-2">
                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    « Trước
                </button>

                {getPaginationButtons().map((btn, index) =>
                    btn === "..." ? (
                        <span key={index} className="btn btn-sm btn-outline-secondary disabled">
                            ...
                        </span>
                    ) : (
                        <button
                            key={index}
                            className={`btn btn-sm ${currentPage === btn ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => handlePageChange(btn)}
                        >
                            {btn}
                        </button>
                    )
                )}

                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Sau »
                </button>
            </div>
        </div>
    );
};

export default PaginatedTable;
