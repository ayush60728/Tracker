const food = require("../models/food");

const valuegraph = async (req, res) => {
    try {
        const id = req.result._id;

        // Get current month range e.g. "2026-02-01" to "2026-02-28"
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");

        const startOfMonth = `${year}-${month}-01`;
        const endOfMonth = `${year}-${month}-31`; // "31" is fine, string compare stops at actual last day

        // ✅ find ALL docs for this user in the current month, sorted by day
        const userdata = await food.find({
            userId: id,
            day: { $gte: startOfMonth, $lte: endOfMonth }
        }).sort({ day: 1 });

        res.json(userdata); // always returns array

    } catch (err) {
        console.error("Value get controller error:", err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = valuegraph;