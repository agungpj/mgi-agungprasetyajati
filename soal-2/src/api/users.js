const express = require("express");
const router = express.Router();
const monk = require("monk");
const Joi = require("@hapi/joi");

const db = monk(process.env.MONGO_URI);
const users = db.get("users");
const schema = Joi.object({
  nama: Joi.string().trim().required(),
  hobi: Joi.string().trim().required(),
  alamat: Joi.string().trim().required(),
  no_telp: Joi.number().integer().required(),
});

// READ ALL
router.get("/", async (req, res, next) => {
  try {
    const items = await users.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await users.findOne({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await users.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await users.findOne({
      _id: id,
    });
    if (!item) return next();
    const updated = await users.update(
      {
        _id: id,
      },
      {
        $set: value,
      }
    );
    res.json(updated);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await users.remove({ _id: id });
    res.json({
      message: "Success Delete",
    });
  } catch (erro) {
    next(error);
  }
});

module.exports = router;
