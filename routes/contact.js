const express = require("express");
const router = express.Router();
const contact = require("../models/ConatctSchema");
const controllers = require("../controllers/contactControllerss");

// test
router.get("/hello", (req, res) => {
  res.send("hello");
});
//post
router.post("/", controllers.postContact);
// get all

router.get("/", controllers.getAlcontacts);
// get by id

router.get("/:id", controllers.getOneContact);
// delete by id
router.delete("/:id", controllers.delete);
// update
router.put("/:id", controllers.update);

module.exports = router;
