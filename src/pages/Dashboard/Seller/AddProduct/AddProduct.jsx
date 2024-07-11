import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const [condition, setCondition] = useState("excellent");
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const productData = {
      ...data,
      condition,
      sellerEmail: user?.email,
    };
    // console.log(productData);
    const res = await axiosPublic.post("/carData", productData);
    console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Product added successfully!");
      navigate("/dashboard/my-products");
    }
  };
  return (
    <div>
      <div className=" p-6 w-11/12 md:w-2/3 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="md:flex gap-x-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                {...register("category")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.category && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="md:flex gap-x-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700">Price</label>
              <input
                type="text"
                {...register("resalePrice")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.resalePrice && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700">Location</label>
              <select
                {...register("location")}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Barisal">Barisal</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
              {errors.location && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="md:flex gap-x-4">
            <div className="md:w-1/2">
              <label className="block text-gray-700">Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="md:w-1/2">
              <label className="block text-gray-700">Year of Use</label>
              <input
                type="number"
                {...register("yearsOfUse")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.yearsOfUse && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              {...register("mobileNumber")}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.mobileNumber && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              {...register("description")}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
