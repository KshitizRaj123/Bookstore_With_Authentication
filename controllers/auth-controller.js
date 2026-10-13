const User = require('../models/user-schema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//register user
const registerUser = async(req,res) =>
{
    try{
        const {username,email,password} = req.body;
        const user = await User.findOne({$or :[
            {username},{email}
        ]})

        if(user)
        {
            res.status(400).json(
                {
                    status : "failure",
                    message : "User with that username or email already exists!!!"
                }
            )
        }
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;
        if (!passwordRegex.test(password))
         {
            return res.status(400).json(
                {
                    status: "failure",
                    message : "password must contain at least 1 uppercase 1 lower case and a special character"
                }
            )
         }
        
         //hash password
         const salt =await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt)

         //create new user and save in database
         const newUser = new User (
            {
                username,
                email,
                password : hashedPassword,
                role : role || 'user'
            }
         )
         await newUser.save()
         if (newUser)
         {
            res.status(201).json(
                {
                    status : "success",
                    message : "New user created sucessfully!!!"
                }
            )
         }
    }
    catch(e)
    {
        res.status(500).json(
            {
                status : "failure",
                message : "Something wrong while registering"
            }
        )
        console.log(e)
    }
}