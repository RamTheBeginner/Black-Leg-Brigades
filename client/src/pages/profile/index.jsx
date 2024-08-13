import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import {
  ADD_PROFILE_IMAGE_ROUTE,
  REMOVE_PROFILE_IMAGE_ROUTE,
  UPDATE_PROFILE_ROUTE,
} from "@/utils/constants";
import { IoArrowBack } from "react-icons/io5";
import { colors } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { userChange } from "@/store/reducers/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user.value); 
 // console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [image, setImage] = useState(user.image || null);
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setImage(user.image || null);
  }, [user]);

  const validateProfile = () => {
    if (!firstName) {
      toast.error("First Name is required");
      return false;
    }
    if (!lastName) {
      toast.error("Last Name is required");
      return false;
    }
    return true;
  };

  const saveChanges = async () => {
    if (validateProfile()) {
      try {
        const response = await apiClient.post(UPDATE_PROFILE_ROUTE, {
          firstName,
          lastName,
          user
        });
        if (response.status === 200 && response.data) {
          const updatedUser = { ...user, ...response.data };
          dispatch(userChange(updatedUser));
          toast.success("Profile Updated Successfully");
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to update profile");
      }
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile-image", file);
      formData.append("userInfo",user.id)
      try {
        const response = await apiClient.post(ADD_PROFILE_IMAGE_ROUTE, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 200 && response.data.image) {
          const updatedUser = { ...user, image: response.data.image };
          dispatch(userChange(updatedUser));  // Update Redux store
          setImage(response.data.image);
          toast.success("Image Updated Successfully");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to update image");
      }
    }
  };

  const handleDeleteImage = async () => {
    try {
      const response = await apiClient.post(REMOVE_PROFILE_IMAGE_ROUTE, { image ,user});
      if (response.status === 200) {
        const updatedUser = { ...user, image: null };
        dispatch(userChange(updatedUser));
        setImage(null);
        toast.success("Image removed successfully");
      } else {
        toast.error("Failed to remove image");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove image");
    }
  };

  return (
    <div className="bg-[#536b7a] h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col gap-10 w-[80vw] md:w-max">
        <div onClick={() => navigate(-1)}>
          <IoArrowBack className="text-4xl lg:text-6xl text-white/90 cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 items-center">
          <div
            className="relative flex items-center justify-center w-32 md:w-48 h-32 md:h-48 mb-14"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className="h-full w-full rounded-full overflow-hidden">
              {image ? (
                <AvatarImage
                  src={image}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`uppercase text-5xl border-[1px] flex items-center justify-center rounded-full ${colors[selectedColor]} h-full w-full`}
                >
                  {firstName ? firstName.charAt(0) : user.email.charAt(0)}
                </div>
              )}
            </Avatar>
            {hovered && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer"
                onClick={image ? handleDeleteImage : handleFileInputClick}
              >
                {image ? (
                  <FaTrash className="text-white text-3xl cursor-pointer" />
                ) : (
                  <FaPlus className="text-white text-3xl cursor-pointer" />
                )}
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
              name="profile-image"
              accept=".png, .jpg, .jpeg, .svg, .webp"
            />
          </div>
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
            <div className="w-full">
              <Input
                placeholder="Email"
                type="email"
                disabled
                value={user.email}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="First Name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Last Name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              />
            </div>
            <div className="w-full flex gap-5">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${
                    selectedColor === index
                      ? "outline outline-white/50 outline-1"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button 
            className="h-16 w-full bg-[#5aa1ca] hover:bg-[#81a5ba] transition-all duration-200"
            onClick={saveChanges}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
