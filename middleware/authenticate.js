// install required dependencies
const jwt = require('jsonwebtoken');


/*
authentication takes the token from the user
and verifies using jwt package
if authentication success then user can visit job route
*/

const authenticate = (request, response, next) => {
    const token = request.headers.authorization;

    if (token) {
        let decoded = jwt.verify(token, 'auth');

        if (decoded) {
            const userID = decoded.userID;
            request.body.userID = userID;
            next();
        } else {
            response.send('authentication failed');
        }
    } else {
        response.send('please login');
    }
}


module.exports = { authenticate };