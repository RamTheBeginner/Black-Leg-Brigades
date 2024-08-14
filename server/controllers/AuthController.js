import Account from "../models/AccountModel.js";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { rename, renameSync, unlinkSync } from "fs";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable ,deleteObject} from "firebase/storage";


import config from "../config/firebase.js";
initializeApp(config.firebaseConfig);
import path from "path";
const maxAge = 3 * 24 * 60 * 60 * 1000; /* Token Valid for 3 days */
const createToken = (email, userId) => {
  /* Tokens data is email and userId  , a function to be called later when token needs to be created*/
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  }); /* JWT_KEY is encryption key */
};

const storage = getStorage();
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
        image:null,
        firstName:"New User",
        lastName:"New User"

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
    }).populate('Accounts').populate({
      path: 'Transactions',
      populate: { 
        path: 'Account', 
      }
    });
    if (!user) return response.status(404).send("User Not Found");
   
    response.cookie("jwt", token, {
      maxAge,
      secure: true,
      sameSite: "None",
    });

   // console.log(user);
    
    return response.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        profileSetup: user.profileSetup,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        Accounts:user.Accounts,
        Transactions:user.Transactions
      },
    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const getUserInfo = async (request, response, next) => {
  try {
    const userData = await User.findById(request.userId).populate('Accounts').populate({
      path: 'Transactions',
      populate: { 
        path: 'Account', 
      }
    });
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
      Accounts:userData.Accounts,
      Transactions:userData.Transactions

    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const updateProfile = async (request, response, next) => {
  try {
    
    const { firstName, lastName , user} = request.body;
    if (!firstName || !lastName) {
      return response
        .status(400)
        .send("FirstName , LastName is required");
    }
   // console.log(request.body)

    const userData = await User.findByIdAndUpdate(
      user.id,
      {
        firstName,
        lastName,
        profileSetup: true,
      },
      { new: true, runValidators: true }
    ).populate('Accounts').populate({
      path: 'Transactions',
      populate: { 
        path: 'Account', 
      }
    });
    return response.status(200).json({
      id: userData.id,
      email: userData.email,
      profileSetup: userData.profileSetup,
      firstName: userData.firstName,
      lastName: userData.lastName,
      image: userData.image,
      Accounts:userData.Accounts,
      Transactions:userData.Transactions

    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};






export const addProfileImage = async (request, response, next) => {
  if (!request.file) {
    return response.status(400).send("File is Required");
  }
  const { userInfo } = request.body;
 // console.log(request.body);
  const dateTime = Date.now();

  const fileName = ref(storage, `files/${request.file.originalname + "       " + dateTime}`);
  

  // Create file metadata including the content type
  const metadata = {
      contentType: request.file.mimetype,
  };
 // renameSync(request.file.path, fileName);
  const snapshot = await uploadBytesResumable(fileName, request.file.buffer, metadata);
  // By using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

  // Grab the public url
  const downloadURL = await getDownloadURL(snapshot.ref);
  //console.log(downloadURL)


  try {
    const updatedUser = await User.findByIdAndUpdate(
      userInfo,
      { image: downloadURL},
      { new: true, runValidators: true }
    ).populate('Accounts');
   //console.log(updatedUser)
  // console.log(userInfo)
    return response.status(200).json({
      image: updatedUser.image,
    });
  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};

export const removeProfileImage = async (request, response, next) => {
  try {
    const {user,image} = request.body
   // console.log(userInfo)
  //  console.log(request.body)
    const user1 = await User.findById(user.id).populate('Accounts');

    

    if (!user1) {
      return response.status(404).send("User Not Found");
    }
   
    user1.image = null;
    await user1.save();

    const desertRef = ref(storage, image);

    deleteObject(desertRef).then(() => {
      // File deleted successfully
      return response.status(200).send("Profile Image Removed Successfully");
    }).catch((error) => {
      // Uh-oh, an error occurred!
      return response.status(500).send("Internal server Error");
    });

  } catch (err) {
    console.log({ err });
    return response.status(500).send("Internal server Error");
  }
};


