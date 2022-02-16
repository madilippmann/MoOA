
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const db = require('../db/models')

const { check, validationResult } = require('express-validator')


const userValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for First Name.")
    .isLength({ max: 50 })
    .withMessage("First Name cannot be longer than 50 characters."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for Last Name.")
    .isLength({ max: 50 }),
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for Username.")
    .isLength({ max: 50 })
    .custom((value) => {
      return db.User.findOne({ where: { username: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "The provided Username is already in use by another account."
            );
          }
        }
      );
    }),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for Email Address.")
    .isLength({ max: 255 })
    .withMessage("Email Address cannot be longer than 255 characters.")
    .isEmail()
    .withMessage("Please enter a valid Email Address.")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "The provided Email Address is already in use by another account."
            );
          }
        }
      );
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for Password.")
    .isLength({ min: 8, max: 50 })
    .withMessage("Password must be between 8 and 50 characters.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for Confirm Password.")
    .isLength({ max: 50 })
    .withMessage("Confirm Password cannot be longer than 50 characters.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please enter your Email Address."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter your password."),
];


const postValidator = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a title.")
    .isLength({ max: 255 })
    .withMessage("Title can only be 255 characters long."),
  check("imageURL")
    .exists({ checkFalsy: true })
    .withMessage("Please enter an image URL.")
    .isURL() // isURL({ protocols: ['https'] })
    .withMessage('Please enter a valid image URL'),
]



module.exports = {
  csrfProtection,
  asyncHandler,
  userValidators,
  loginValidators,
  validationResult,
  postValidator
};
