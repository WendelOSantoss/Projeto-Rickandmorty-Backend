const User = require("./users/User");


const loginService = (email) => User.findOne({email:email}).select("+senha");



module.exports = {loginService};

