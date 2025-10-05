import axios from "axios";
import * as api from './api'
const API_URL = api.API + "/Nam";
// Lấy toàn bộ danh sách
export const getNams = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Lấy chi tiết theo ID
export const getNamById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Thêm mới
export const createNam = async (nam) => {
    const response = await axios.post(API_URL, nam);
    return response.data;
};

// Cập nhật
export const updateNam = async (id, nam) => {
    await axios.put(`${API_URL}/${id}`, nam);
};

// Xóa
export const deleteNam = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};