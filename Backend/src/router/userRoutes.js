import express from "express";
import userSingupModel from "../model/user.model.singup.js"; // Adjust the path if necessary
import moment from "moment-timezone";
import utrModel from "../model/UTR.model.js";

const router = express.Router();

// Define user-related routes

// Signup route
router.post("/signup", async (req, res) => {
  const data = req.body;
  try {
    // Check if user already exists
    let existingUser = await userSingupModel.findOne({ number: data.number });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Create a new user
    const newUser = new userSingupModel(data);
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).send("Server error");
  }
});

// Login route
router.post("/login", async(req, res) => {
  // Placeholder for login logic
  let data=req.body
  try {
    let existingUser = await userSingupModel.findOne({ number: data.number ,password: data.password});
    if(existingUser){
        res.send("User login secusfull")
    }else{
        res.send("User Number and password wring");
    }
    
  } catch (error) {
    
  }
  
});
router.patch('/recharge',async(req,res)=>{
  const currentTime = moment().tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ss');
    let data=req.body
    try {
      const user = await userSingupModel.findOne({ number: data.number });
       const U = await userSingupModel.findOne({ 'recharge.UTR': data.UTR });
      // const U = await utrModel.findOne({ 'UTR.no': data.UTR });
      if(U){
       return res.send("UTR all Ready clevm")
      }
      if(user){
        data.currentTime=currentTime
        user.recharge.push(data); // Assuming rechargeAmount is in the request body
        // U.push(data.UTR); // Assuming rechargeAmount is in the request body

            // Save the updated user document
         let f=   await user.save();
        //  let j=   await U.save();
         console.log(U)
        //  console.log(j)
        res.send("Recharge Done")
      }else{res.send("User not present")}
    } catch (error) {
      console.log("Recharge not done")
    }
})

// router.post("/UTR", async (req, res) => {
//   let data = req.body;
//   let re = '8500'; // The value you want to search for

//   try {
//       // Find documents that match the query
//       let results = await utrModel.find({ ref: re });

//       if(results){
//         results.push(data)
//         // await results.save()
//         return res.send(results)
//       }

//       // Update each document by pushing the new data into the UTR array
      
//   } catch (error) {
//       // Handle errors
//       console.error("Error querying UTR:", error);
//       res.status(500).send("Internal Server Error");
//   }
// });
router.post('/dynamic', async (req, res) => {
  let data=req.body
  try {
    let users = await userSingupModel.findOne({number:data.number}); // Fetch all users from the database
    res.send(users); // Send the retrieved users as a response
  } catch (error) {
    console.error("Error fetching user details", error);
    res.status(500).send("Error fetching user details");
  }
});




export default router;
