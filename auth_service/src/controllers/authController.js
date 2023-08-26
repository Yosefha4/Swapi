import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};


export const signin = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return next("404 , User not found!");

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next("400, Wrong Credentials!");

    const token = jwt.sign({ id: user._id }, "7sd3%&*(accdv23d6sf@#vds2");
    const { password, ...others } = user._doc;

    res.cookie("access_token", token, { httpOnly: true });

    res.status(200).json({ others: others, token: token });
  } catch (err) {
    next(err);
  }
};
