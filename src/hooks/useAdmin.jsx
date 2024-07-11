import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isAdmin = false,
    isLoading: isAdminLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading ,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin, refetch, isAdminLoading];
};

export default useAdmin;
