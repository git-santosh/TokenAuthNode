const JWT = require('jsonwebtoken');
const User = require('../models/users');
const { JWT_SECRET } = require('../config')
let signToken = userId =>{
    return JWT.sign({
        iss:'santoshSurya',
        sub:userId,
        iat:new Date().getTime(),
        exp:new Date().setDate(new Date().getDate() +1) //current time + 1 day ahead 
    },JWT_SECRET);
}
module.exports = {
    signUp : async (req,res)=>{ 
        
        const { email , password } = req.value.body;

        let foundUser = await User.findOne({email});
        if(foundUser){
           return res.status(403).json({'error':'Email is already in use'});
        }
        let newUser = new User({email,password});

        await newUser.save();
        //generate token 
        let token = signToken(newUser.id);
       //resonse with jwt  token 
       return res.status(200).json({'result':{'newUser':true,token}});
    },
    signIn : async (req,res)=>{ 
        console.log('user Controller signIn')
    },
    secret : async (req,res)=>{ 
        
        res.json({'secret':'resource'})
    }
}