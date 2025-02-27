import passport from "passport"//Biblioteca para autenticar con node JS
import {Strategy as GoolgeStrategy} from "passport-google-oauth20"
import dotenv from "dotenv"

dotenv.config()

passport.use(
    new GoolgeStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken,refreshToken, profile, done)=>{
        return done(null, profile)
    })
)

passport.serializeUser((user,done)=>{
    done(null, user)
})

passport.deserializeUser((obj,done)=>{
    done(null, obj)
})

export default passport