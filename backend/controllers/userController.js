import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// Login User
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user)
            {
                return res.json({success:false,message:"User Doesn't Exists" })
            }
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch)
                {
                    return res.json({success:false,message:"Password Doesn't Match" })
                }
                const token= createToken(user._id);
                res.json({success:true,token})
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user

const registerUser = async(req,res) => {
    const {name,email,password} = req.body;
    try {
        //Checking user already exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }
        // validating email format and stromg password 
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Invalid email format! Please enter a valid email"})
            }

        if (password.length < 8) {
                return res.json({success:false,message:"Password must be at least 8 characters long"})
            }

            // hashing user password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt)

            const newUser = new userModel({
                name:name,
                email:email,
                password:hashedPassword
            })
          const user =  await newUser.save()
          const token = createToken(user._id)
          res.json({success:true,token});
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser};