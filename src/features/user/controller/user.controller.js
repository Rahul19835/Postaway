// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';
import { addUser, confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    const email = req.email;
    const JWT_SECRET = 'b19921064ae9078dd573cd2cfa5ffd0f23a0c594264d700e0eae2f320264e3f9';
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwtToken', token, { httpOnly: true, secure: false });
    res
      .status(200)
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
