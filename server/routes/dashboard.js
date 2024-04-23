const router= require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.post("/", authorization, async (req, res) => {
    try {
       if(!req.user){
        return res.redirect("/login");
       }
       
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user.id]);
        res.json(user.rows[0]);
    } catch (err) {
        console.error("err.message");
        res.status(500).json("Server Error")
    }
});


module.exports = router;