const bcrypt = require('bcrypt');
const User = require('../models/User');
const {generateToken} = require('../configuration/jwtConfig');  

const loginUser =async (req,res)=>{
    try{
        const {email,password} = req.body;
        /**first check whether user is available */
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({message:'User not found'});
        }
        /**compare the password */
        const isMatch =await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:'Invalid password'});
        }
        /**generate the token */
        const token = generateToken(user);
        res.status(200).json({message:'Login success',token:token});

    }catch(e){
        res.status(500).json({message:e.message});
    }
}