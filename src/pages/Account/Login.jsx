import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SocialLogin from "../../component/SocialLogin/SocialLogin";

const Login = () => {
  const { userLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("User login successfully:", loggedUser);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Login failed. Please try again.");
      });
  };

  return (
    <div className="pt-20">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-sky-600">Login</h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="email" className="block ">
              Your Email
            </label>
            <input
              type="email"
              placeholder="User email"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          {/* Sign in Button */}
          <button className="text-lg rounded-xl relative p-2 block w-full bg-sky-600 text-white border-y-4 duration-500 overflow-hidden focus:border-sky-500 z-50 group">
            Log In
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Don&apos;t have an account?
          <Link to="/register" className="underline hover:text-sky-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
