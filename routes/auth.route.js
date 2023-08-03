// install required dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AuthModel } = require('../models/auth.model');


const authRoute = express.Router();



// ---------------- REGISTRATION ROUTE FOR THE USER POST REQUEST ---------------- //

/*
registration route takes the `name`, `email` and `password` from the user
bcrypt packages converts the password and hash it.
it will prevent the protection to save the password from the hacking
*/

authRoute.post('/register', async (request, response) => {
    const { name, email, password } = request.body;

    try {
        if (name && email && password) {
            const old_user = await AuthModel.find({ email });
            if (old_user.length > 0) {
                response.send({
                    'message': `${old_user[0].name} you're email address already exists. please log in`
                });
            } else {
                bcrypt.hash(password, 5, async (error, hash) => {
                    if (error) {
                        response.send({
                            'message': `something went wrong: ${error}`
                        });
                    } else {
                        const new_user = new AuthModel({ name, email, password: hash });
                        await new_user.save();
                        response.send({
                            'message': `${name} you're successfully registered. please log in`
                        });
                    }
                });
            }
        } else {
            response.send({
                'message': 'All fields are required'
            });
        }
    } catch (error) {
        response.send({
            'message': `cannot able to register the user: ${error}`
        });
    }
});


// ---------------- LOGIN ROUTE FOR THE USER POST REQUEST ---------------- //

/*
login route takes the `email` and `password` from the user
bcrypt compares the provided password and store password and give the response
jwt create the unique token id to the login user
*/

authRoute.post('/login', async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await AuthModel.find({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (error, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, 'auth', { expiresIn: 60 * 60 });
                    response.send({
                        'message': `${user[0].name} you are successfully logged in`,
                        'token': token
                    });
                } else {
                    response.send({
                        'message': `password incorrect ${error}`
                    });
                }
            });
        } else {
            response.send({
                'message': 'cannot find the email address, wrong credentials'
            });
        }
    } catch (error) {
        response.send({
            'message': `cannot able to login the user: ${error}`
        });
    }
});





module.exports = { authRoute };