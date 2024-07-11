import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useBuyer = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isBuyer = false,
    isLoading: isBuyerLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "isBuyer"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/buyer/${user.email}`);
      return res.data?.isBuyer;
    },
  });

  return [isBuyer, refetch, isBuyerLoading];
};

export default useBuyer;
