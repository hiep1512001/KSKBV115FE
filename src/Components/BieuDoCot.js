import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    LabelList
} from "recharts";

/**
 * Biểu đồ cột có thể tái sử dụng
 * @param {Array} data - Dữ liệu [{ name, value }]
 * @param {Array} colors - Danh sách màu
 * @param {String} title - Tiêu đề hiển thị
 * @param {Number} height - Chiều cao (default: 320)
 */
const BieuDoCotBase = ({
    data = [],
    colors = [],
    title = "Biểu đồ cột",
    height = 320,
}) => {
    return (
        <div style={{ width: "100%", height }}>
            <h6 className="text-center text-secondary mb-3">{title}</h6>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(v) => `${v} người`} />
                    <Legend verticalAlign="bottom" height={36} />
                    <Bar
                        dataKey="value"
                        radius={[6, 6, 0, 0]}
                        fill={colors[0] || "#8884d8"}
                        name="Số lượng"
                    >
                        <LabelList dataKey="value" position="top" fill="#333" fontSize={12} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BieuDoCotBase;
