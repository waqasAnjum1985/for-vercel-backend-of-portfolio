const jwt = require("jsonwebtoken");
const { user } = require("../models/portfolioModel");
exports.middleware = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // const token = req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token is mossing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        sucess: false,
        message: "invalid token",
      });
    }

    const User = await user.findById({
      _id: decoded.id,
    });
    if (!User) {
      return res.status(401).json({
        success: false,
        message: "user not found",
      });
    }
    req.user = User;

    next();
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: " internal server error in middleware",
    });
  }
};
