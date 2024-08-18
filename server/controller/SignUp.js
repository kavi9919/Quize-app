const User =require('../models/User');
/**bycript the password */
const bcrypt = require('bcrypt'); 

const signupUser = async (req,res)=>{
    try{
    const {firstName,lastName,email ,password ,role} =req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    const isUserExist =await User.findOne({email});
    if(isUserExist){
        return res.status(400).json({message:'User already exist'});
    }
    const user = new User({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        role:'basic'
    });
    const result = await user.save();
    res.status(201).json({message:'User created',result});
}catch(e){
    res.status(500).json({message:e.message});
}
};

module.exports = signupUser;