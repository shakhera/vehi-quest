import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSeller = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isSeller = false,
    isLoading: isSellerLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "isSeller"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/seller/${user.email}`);
      return res.data?.isSeller;
    },
  });

  return [isSeller, refetch, isSellerLoading];
};

export default useSeller;
