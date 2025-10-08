import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Layer,
    Sector,
} from "recharts";

const PieChartBase = ({
    data = [],
    colors = [],
    title = "",
    height = 320,
    innerColor = "#f3f6f9", // màu nền bên trong
}) => {
    const renderLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        if (percent < 0.01) return null;
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text
                x={x}
                y={y}
                fill="#333"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                fontSize={12}
            >
                {(percent * 100).toFixed(0)}%
            </text>
        );
    };

    return (
        <div style={{ width: "100%", height }}>
            {title && (
                <h6 className="text-center text-secondary mb-2">{title}</h6>
            )}
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    {/* Vòng nền bên trong */}
                    <Layer>
                        <Sector
                            cx="50%"
                            cy="45%"
                            innerRadius={0}
                            outerRadius="42%"
                            fill={innerColor}
                        />
                    </Layer>

                    {/* Vòng donut chính */}
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="45%"
                        innerRadius="45%"
                        outerRadius="70%"
                        label={renderLabel}
                        labelLine={false}
                        paddingAngle={2}
                    >
                        {data.map((entry, idx) => (
                            <Cell key={idx} fill={colors[idx % colors.length]} />
                        ))}
                    </Pie>

                    <Tooltip formatter={(v) => `${v} người`} />
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        height={50}
                        wrapperStyle={{ fontSize: 13 }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartBase;
