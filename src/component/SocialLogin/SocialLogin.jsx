import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log("user login with google", loggedUser);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: 'buyer',
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });

      })
      .catch((error) => {
        console.log("error for google login", error.message);
      });
  };
  return (
    <div>
      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm text-gray-600">Register with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {/* Social icons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleLoginWithGoogle}
          aria-label="Register with Google"
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
        </button>
        <button
          aria-label="Register with Facebook"
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <FaFacebook className="w-6 h-6 fill-current"></FaFacebook>
        </button>
        <button
          aria-label="Register with GitHub"
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <FaGithub className="w-5 h-5 fill-current"></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
