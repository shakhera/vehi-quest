import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("User registered successfully:", loggedUser);
        updateUserProfile(data.name)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              role: data.role || "user",
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log("user info", res.data);
              if (res.data.insertedId) {
                console.log("user add to the db");
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User create successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log("Registration failed:", error.message);
        toast.error("Login failed. Please try again.");
      });
  };

  return (
    <div className="pt-20">
      <div className="w-full max-w-md p-8 space-y-2 rounded-xl border bg-white font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-sky-300 focus:outline-none focus:ring"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md border border-sky-300 focus:outline-none focus:ring"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-sky-300 focus:outline-none focus:ring"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="role" className="block">
              Role
            </label>
            <select
              {...register("role")}
              className="w-full px-4 py-3 rounded-md border border-sky-300 focus:outline-none focus:ring"
            >
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="text-lg rounded-xl p-2 block w-full bg-sky-600 text-white border-y-4 duration-500 overflow-hidden"
          >
            Register
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6">
          Already have an account?
          <Link to="/login" className="underline hover:text-sky-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
