const run=require("../utils/gemini"); 
const aifunction =async (req,res) => {
    const response=await run(req.body);    
    res.json({
        response:response
    })
    
}

module.exports = aifunction


