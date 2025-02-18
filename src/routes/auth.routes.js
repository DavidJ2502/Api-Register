import { Router } from "express";
import passport from "passport";

const router = Router();

//inicion de seccion con google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//callback de google auntenticacion
router.get("/google/callbak", passport.authenticate("google", {  successRedirect:"ruta para hacer a la pag, no me la se o se me olivdo JAJAJ" , failureRedirect: "/login"}));


export default router;