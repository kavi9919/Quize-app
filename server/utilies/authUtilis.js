const jwt = require('jsonwebtoken');
const secreateKey = require('../configuration/jwtConfig');

function generateToken(user) {
    const token = jwt.sign({ id: user._id, email: user.email }, secreateKey, { expiresIn: '1h' });
    return token;
}

function generateRefreshToken(user){
    const refreshToken = jwt.sign({id: user._id, email: user.email}, secreateKey, {expiresIn: '7h'});
    return refreshToken;
}
function verifyToken(token) {
    const decoded = jwt.verify(token, secreateKey);
    return decoded;
}
module.exports = { generateToken, verifyToken, generateRefreshToken };