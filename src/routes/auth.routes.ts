import {Router} from "express";

const router = Router();

router.post("/register", (req, res) => {
    res.jsonp({message: "REgister route working"});
});

router.post("/login", (req, res) => {
    res.json({message : "Login route working"});
});

export default router;
