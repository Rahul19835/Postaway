import jwt from 'jsonwebtoken';
const JWT_SECRET = 'b19921064ae9078dd573cd2cfa5ffd0f23a0c594264d700e0eae2f320264e3f9';
const jwtAuth = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token) {
    return res.status(401).json({ success: false, msg: 'Token missing' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, msg: 'Token invalid or expired' });
  }
};

export default jwtAuth;
