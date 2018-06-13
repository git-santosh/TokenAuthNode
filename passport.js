const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./config');
const User = require('./models/users');
passport.use(new jwtStrategy({
    jwtFromRequest :ExtractJwt.fromHeader('authorization'),
    secretOrKey:JWT_SECRET
},async (payload, done)=>{

    try{
        const user = await User.findById(payload.sub);
        
        if(!user){
            return done(null,false);
        }
        done(null,user);
    }catch(err){
        done(err,false);
    }
}))