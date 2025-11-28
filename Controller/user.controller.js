const User = require("../model/user.model"); 

const getUsers = async (req, res) => {
        res.json({
            success: true,
            data: [{ name: "Nitesh" }, { name: "veer" }]
        });    
};

module.exports = {getUsers};