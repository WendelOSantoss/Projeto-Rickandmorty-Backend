const createUserController = async(req, res) => {
    res.send({message: "Create ok"})
};
const findallUserController = async(req, res) => {
    res.send({message: "Find All ok"})
};

module.exports = {createUserController,findallUserController};
