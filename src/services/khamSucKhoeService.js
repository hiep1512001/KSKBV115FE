import axiosClient from "./axiosClient";

const API_URL = "/KhamSucKhoe";

const KhamSucKhoeService = {
    // 🔹 Lấy toàn bộ danh sách
    getAll: async () => {
        const response = await axiosClient.get(API_URL);
        return response.data;
    },

    // 🔹 Lấy chi tiết theo ID
    getById: async (id) => {
        const response = await axiosClient.get(`${API_URL}/${id}`);
        return response.data;
    },

    // 🔹 Tìm kiếm theo mã năm và tên nhân viên
    search: async ({ maNam = "", ten = "" }) => {
        const params = {};
        if (maNam) params.maNam = maNam;
        if (ten) params.ten = ten;

        const response = await axiosClient.get(`${API_URL}/search`, { params });
        return response.data;
    },

    // 🔹 Tạo mới
    create: async (data) => {
        const response = await axiosClient.post(API_URL, data);
        return response.data;
    },

    // 🔹 Cập nhật
    update: async (id, data) => {
        const response = await axiosClient.put(`${API_URL}/${id}`, data);
        return response.data;
    },

    // 🔹 Xóa
    delete: async (id) => {
        const response = await axiosClient.delete(`${API_URL}/${id}`);
        return response.data;
    },

    // 🔹 Đếm số dòng theo mã năm (tổng + Loại I-IV)
    countByNam: async (maNam) => {
        const response = await axiosClient.get(`${API_URL}/count`, { params: { maNam } });
        return response.data;
    },

    // 🔹 Lấy thống kê loại bệnh theo mã năm (13 cột)
    getLoaiBenh: async (maNam) => {
        const response = await axiosClient.get(`${API_URL}/LoaiBenh`, { params: { maNam } });
        return response.data;
    },
};

export default KhamSucKhoeService;
