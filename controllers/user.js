
const User = require('../models/users');
module.exports = {
    signUp : async (req,res)=>{ 
        console.log('user Controller signUp');
        const { email , password } = req.value.body;

        let newUser = new User({email,password});

        await newUser.save();

        return res.status(200).json({'resut':'user created'})
    },
    signIn : async (req,res)=>{ 
        console.log('user Controller signIn')
    },
    secret : async (req,res)=>{ 
        console.log('user Controller secret')
    }
}