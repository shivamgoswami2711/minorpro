const JsonWebToken = require("jsonwebtoken");
const { CatchAsyncError } = require("../middleware/error/CatchAsyncError");
const user = require("../module/user");

exports.newUser = CatchAsyncError(async (req, res, next) => {
  const data = await user.create(req.body);
  res.status(201).json({
    massage: "user registertion done",
    data,
  });
});

exports.emailchack = CatchAsyncError(async (req, res, next) => {
  console.log(req.body.email);
  const data = await user.find({ email: req.body.email });
  console.log(data);
  res.status(200).json({
    massage: "user registertion done",
    data,
  });
});

exports.login = CatchAsyncError(async (req, res, next) => {
  const data = await user.find({
    email: req.body.email,
    password: req.body.password,
  });
  // let token;
  if (data.length==1) {
    // token = JsonWebToken.sign(
    //   { email: data.email, name: data.name, role: data.role },
    //   "secratehaibaba"
    // );
    res.status(200).json({
      massage: "success",
      token:true,
      data:{ email: data.email, name: data.name, role: data.role }
    });
  }else{
    console.log("hello")
    res.status(404).json({
    massage: "chack user and password"
  });
  }

});
