const express = require("express");
const { insert } = require("../controller/handleForm");
const router = express.Router();



router.post("/insert-data", insert);



  
module.exports = router;