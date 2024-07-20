import jwt from 'jsonwebtoken';
import { addUser, confirmLogin } from "../model/user.model.js";
import { CustomError } from "../../../middlewares/errorHandler.js";

export const registerUser = (req, res, next) => {
  try {
    const userData = req.body;
    if (!userData) {
      throw new CustomError(400, "Invalid user details");
    }
    const user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } catch (error) {
    next(error);
  }
};

export const loginUser = (req, res, next) => {
  try {
    const status = confirmLogin(req.body);
    if (!status) {
      throw new CustomError(400, "Invalid user details");
    }
    const JWT_SECRET = 'b19921064ae9078dd573cd2cfa5ffd0f23a0c594264d700e0eae2f320264e3f9';
    const token = jwt.sign({ userId: status.id }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwtToken', token, { httpOnly: true, secure: false });
    res.status(200).json({ status: "success", msg: "Login successful", token });
  } catch (error) {
    next(error);
  }
};
