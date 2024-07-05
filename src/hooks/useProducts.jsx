import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { data: carData = [], refetch } = useQuery({
    queryKey: ["carData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/carData");
      return res.data;
    },
  });
  return [carData, refetch];
};

export default useProduct;
