import User from '../models/user.model.js'
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const create_user = async (req,res,next)=>{
    const {username,password,email}=req.body;
    try {
      const existingUser = await User.findOne({ username : username } )
      const existingEmail = await User.findOne({ email:email })
      if (existingUser || existingEmail) {
         return res.status(404).json({message:'User Already Exists'})
      }
    } catch (error) {
      console.log(error)
    }
    const salt = 10
      const hashedPassword = bcryptjs.hashSync(password, salt);
     const newUser = new User({ username, email, password: hashedPassword });
      try {
        await newUser.save();
      return res.status(201).json("User Created Successfully");
      } catch (error) {
          return console.log(error);
        }
      

}

export const login = async (req,res,next)=>{
    const { email, password } = req.body;
    try {
      const validuser = await User.findOne({ email: email });
      if (!validuser) {
        return res.status(404).json({message: "Invalid Credentials"});   
      }
      const validpassword = bcryptjs.compareSync(password, validuser.password);
      if (!validpassword) {
        return res.status(401).json({message: "Invalid Credentials"});
      }
      const token = jwt.sign({ validuser }, process.env.JWT_Secret, { expiresIn: "1h" });
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(validuser);
    } catch (error) {
      console.log(error);
    }
  };

export const logout = (req,res,next)=>{
    try {
        res.clearCookie("access_token");
        res.status(200).json("User has been logged out!");
      } catch (error) {
        console.log(error);
      }
};
