const User = require('../model/user')

const index = async (req, res) => {
    const users = await User.find()
    res.json(users)

}

module.exports= {
    index,
}