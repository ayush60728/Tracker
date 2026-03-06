'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";
import { useState, useEffect } from "react";

const LineCharts = () => {
    const [formattedData, setFormattedData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get("https://mf-backend-0cqj.onrender.com/value/graph", {
                    withCredentials: true
                });

                const raw = Array.isArray(result.data) ? result.data : [result.data];

                const formatted = raw.map((item) => ({
                    // ✅ use item.day, not createdAt
                    name: new Date(item.day).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
                    protein: item.protein,
                    fats: item.fats,
                    kcal: item.kcal,
                }));

                setFormattedData(formatted);
            } catch (err) {
                console.error("Failed to fetch data:", err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <p className="text-center text-white/50">Loading...</p>;
    if (formattedData.length === 0) return <p className="text-center text-white/50">No data yet</p>;

    return (
        // ✅ ResponsiveContainer makes it fluid width
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="protein" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="fats" stroke="#82ca9d" />
                <Line type="monotone" dataKey="kcal" stroke="#ffc658" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineCharts;
