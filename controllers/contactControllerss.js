const contact = require("../models/ConatctSchema");
exports.postContact = async (req, res) => {
  try {
    const newContact = new contact({ ...req.body });
    !newContact.email || !newContact.name
      ? res.status(400).send({
          message: "you left a required field empty , please check again !",
        })
      : "";
    const response = await newContact.save();
    res.send({ response: response, message: "user created !" });
  } catch (error) {
    res.status(400).send({ message: "can not save this contact !" });
  }
};

exports.getAlcontacts = async (req, res) => {
  try {
    const response = await contact.find();
    res.send({ response: response, message: "operation succesfull !" });
  } catch (error) {
    res.status(400).send({ message: "cannot get contacts !" });
  }
};
exports.getOneContact = async (req, res) => {
  try {
    const response = await contact.findOne({ _id: req.params.id });
    response === null
      ? res.send({
          response: response,
          message: "no contact has been fount check again !",
        })
      : res.send({ response: response, message: "operation succesfull !" });
  } catch (error) {
    res.status(400).send({ message: "no contact can be found for that id !" });
  }
};
exports.delete = async (req, res) => {
  try {
    const response = await contact.deleteOne({ _id: req.params.id });
    response.n
      ? res.send({
          response: response,
          message: "contact deleted succesfully !",
        })
      : res.send({ message: "no contact with this id !" });
  } catch (error) {
    res.status(400).send({ message: "not deleted ! " });
  }
};
exports.update = async (req, res) => {
  try {
    const response = await contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    response.nModified
      ? res.send({ message: "updated !" })
      : res.send({ message: "nothing to update !" });
  } catch (error) {
    res.status(400).send({ message: "contact cannot be found !" });
  }
};
