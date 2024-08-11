
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { rename, renameSync, unlinkSync } from "fs";
import path from "path";
const maxAge = 3 * 24 * 60 * 60 * 1000; /* Token Valid for 3 days */
const createToken = (email, userId) => {
  /* Tokens data is email and userId  , a function to be called later when token needs to be created*/
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  }); /* JWT_KEY is encryption key */
};
export const signup = async (request, response, next) => {
  try {
    const { email, token } = request.body;
    if (!email ) {
      return response.status(400).send("Email and Password are required");
    }
    const user = await User.create({
      email,
      token
      
    });
    response.cookie("jwt", token, {
      maxAge,
      secure: true,
      sameSite: "None",
    });
    return response.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        token: user.token,
      },
    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const login = async (request, response, next) => {
  try {
    const { email,token} = request.body;
    if (!email || !token) {
      return response.status(400).send("Email and Password are required");
    }
    const user = await User.findOne({
      email,
    }); 
    if (!user) return response.status(404).send("User Not Found");
   
    response.cookie("jwt", token, {
      maxAge,
      secure: true,
      sameSite: "None",
    });
    
    return response.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        profileSetup: user.profileSetup,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image  
      },
    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const getUserInfo = async (request, response, next) => {
  try {
    const userData = await User.findById(request.userId);
    if (!userData) {
      return response.status(404).send("User With Given Id not found");
    }
    return response.status(200).json({
      id: userData.id,
      email: userData.email,
      profileSetup: userData.profileSetup,
      firstName: userData.firstName,
      lastName: userData.lastName,
      image: userData.image,
      color: userData.color,
    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const updateProfile = async (request, response, next) => {
  try {
    
    const { firstName, lastName,userInfo } = request.body;
    if (!firstName || !lastName) {
      return response
        .status(400)
        .send("FirstName , LastName is required");
    }

    const userData = await User.findByIdAndUpdate(
      userInfo.id,
      {
        firstName,
        lastName,
        profileSetup: true,
      },
      { new: true, runValidators: true }
    );

    return response.status(200).json({
      id: userData.id,
      email: userData.email,
      profileSetup: userData.profileSetup,
      firstName: userData.firstName,
      lastName: userData.lastName,
      image: userData.image,
    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};






// export const addProfileImage = async (request, response, next) => {
//   if (!request.file) {
//     return response.status(400).send("File is Required");
//   }

//   const date = Date.now();
//   let fileName = "uploads/profiles/" + date + request.file.originalname;
//   renameSync(request.file.path, fileName);

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       request.userId,
//       { image: fileName },
//       { new: true, runValidators: true }
//     );

//     return response.status(200).json({
//       image: updatedUser.image,
//     });
//   } catch (err) {
//     console.log({ err });
//     return response.status(500).send("Internal server Error");
//   }
// };

// export const removeProfileImage = async (request, response, next) => {
//   try {
//     const { userId } = request;
//     const user = await User.findById(userId);

//     if (!user) {
//       return response.status(404).send("User Not Found");
//     }
//     if (user.image) {
//       unlinkSync(user.image);
//     }
//     user.image = null;
//     await user.save();

//     return response.status(200).send("Profile Image Removed Successfully");
//   } catch (err) {
//     console.log({ err });
//     return response.status(500).send("Internal server Error");
//   }
// };


