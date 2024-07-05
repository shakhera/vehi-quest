import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useProduct from "../../../../hooks/useProducts";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyProduct = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(products);
  console.log(user?.email);

  useEffect(() => {
    axiosPublic
      .get(`/myCarData?email=${user?.email}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch products.");
      });
  }, [user, axiosPublic]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carData/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 1500,
            });
            setProducts(products.filter((product) => product._id !== id));
          }
        });
      }
    });
  };

  const handleAdvertise = (id) => {
    axiosPublic
      .patch(`/carData/advertise/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product advertised successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          setProducts(
            products.map((product) =>
              product._id === id ? { ...product, advertised: true } : product
            )
          );
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to advertise product.");
      });
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">My Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Product Name</th>
                <th className="py-2 px-4 border">Product Category</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Condition</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Year of Use</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id} className="text-center">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{product.name}</td>
                  <td className="py-2 px-4 border">{product.category}</td>
                  <td className="py-2 px-4 border">{product.resalePrice}</td>
                  <td className="py-2 px-4 border">{product.condition}</td>
                  <td className="py-2 px-4 border">{product.location}</td>
                  <td className="py-2 px-4 border">{product.yearsOfUse}</td>
                  <td className="py-2 px-4 border">
                    {product.sold ? "Sold" : "Available"}
                  </td>
                  <td className="py-2 px-4 border">
                    {!product.sold && (
                      <span className="lg:flex gap-1">
                        <button
                          onClick={() => handleAdvertise(product._id)}
                          className="bg-green-500 text-white px-2 rounded hover:shadow-lg mr-2 mb-2"
                          // disabled={product.advertised}
                        >
                          {product.advertised ? "Advertised" : "Advertise"}
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="bg-red-500 text-white px-2 rounded hover:shadow-lg"
                        >
                          Delete
                        </button>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
