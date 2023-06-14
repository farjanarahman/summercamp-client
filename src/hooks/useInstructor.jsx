import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


// Instructor hook
const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      if (!user){
        return false;
    }
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log("isInstructor response", res);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;