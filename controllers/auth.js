const { response } = require('express');

const loginUser = (req, res = response) => {

    const { email, password } = req.body
    
    res.json({
        ok: true,
        msg: 'Login',
        email,
        password
    })
}

const createUser = (req, res = response) => {

    const { name, email, password } = req.body
    
    res.status(201).json({
        ok: true,
        msg: 'Register / Create',
        name,
        email,
        password
    })
}

const reNewToken = (req, res = response) => {
    res.json({
        ok: true
    })
}

module.exports = {
    loginUser,
    createUser,
    reNewToken
}