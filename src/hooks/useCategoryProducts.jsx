import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategoryProducts = (categoryId) => {

  const axiosPublic = useAxiosPublic();
  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ["carData", categoryId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carData/${categoryId}`);
      return res.data;
    },
  });
  return [ products, isLoading, isError ];
};

export default useCategoryProducts;
