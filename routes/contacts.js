const express = require("express");
const contactRouter = express.Router();
const contact = require("../models/contacts");

contactRouter.post("/add", async (req, res) => {
  try {
    let newContact = new contact({ ...req.body });
    let result = await newContact.save();
    res.send({ result, msg: "contact added" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "failed to respond" });
  }
});

contactRouter.delete("/:id", async (req, res) => {
  try {
    let result = await contact.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " contact deleted " });
  } catch (error) {
    console.log(error);
    res.send({ msg: "failed to respond" });
  }
});

contactRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    let result = await contact.findOne({ _id: req.params.id });
    res.send({ result, msg: " her is teh result" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "failed to respond" });
  }
});

contactRouter.get("/total", async (req, res) => {
  try {
    let result = await contact.find();
    res.send({ result, msg: " contacts total" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "failed to respond" });
  }
});

contactRouter.put("/:id", async (req, res) => {
  try {
    let result = await contact.findOneAndUpdate({
      _id: req.params.id,
      $set: { ...req.body },
    });
    res.send({ result, msg: " ONE users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = contactRouter;
