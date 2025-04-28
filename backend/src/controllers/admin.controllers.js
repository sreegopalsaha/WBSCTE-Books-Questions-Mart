import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Admin } from "../models/Admin.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const adminRegister = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    throw new ApiError(
      400,
      "Please provide all fields.. username, email and password"
    );
  let admin = await Admin.find();

  if (admin.length != 0)
    throw new ApiError(400, "Only one admin can be allowed to register");
  admin = await Admin.create({ username, email, password });
  if (!admin)
    throw new ApiError(500, "Admin registration failed due to server errors");
  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { ...admin._doc, password: null },
        "Admin registered successfully"
      )
    );
});

const adminLogin = asyncHandler(async (req, res) => {
  
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    throw new ApiError(
      400,
      "Please provide all fields: email or username and password"
    );
  }

  const admin = await Admin.findOne({
    $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
  }).select("+password");

  if (!admin) {
    throw new ApiError(400, "Invalid login credentials");
  }

  const isMatch = await admin.isPasswordCorrect(password);
  if (!isMatch) {
    throw new ApiError(400, "Invalid login credentials");
  }

  const token = await admin.generateToken();
  if (!token) {
    throw new ApiError(500, "Error while generating JWT token");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("token", token, options)
    .json(
      new ApiResponse(
        200,
        { admin: { ...admin._doc, password: null }, token },
        "Admin logged in successfully"
      )
    );
});

const getAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findOne().select("-password");
  if (!admin) throw new ApiError(404, "No admin account found");
  res.status(200).json(new ApiResponse(200, admin, "admin fetched"));
});

export { adminRegister, adminLogin, getAdmin };
