import axiosClient from "./axiosClient";

const NamService = {
    // Lấy toàn bộ danh sách
    getAll: async () => {
        const response = await axiosClient.get("/Nam");
        return response.data;
    },

    // Lấy chi tiết theo ID
    getById: async (id) => {
        const response = await axiosClient.get(`/Nam/${id}`);
        return response.data;
    },

    // Thêm mới
    create: async (nam) => {
        const response = await axiosClient.post("/Nam", nam);
        return response.data;
    },

    // Cập nhật
    update: async (id, nam) => {
        const response = await axiosClient.put(`/Nam/${id}`, nam);
        return response.data;
    },

    // Xóa
    delete: async (id) => {
        const response = await axiosClient.delete(`/Nam/${id}`);
        return response.data;
    },
};

export default NamService;
