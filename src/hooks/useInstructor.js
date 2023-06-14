import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: instructors = [] } = useQuery({
     queryKey: ['instructors', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/instructor?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [instructors, refetch]
}
export default useInstructor;



// const { user } = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
//         queryKey: ['isInstructor', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//             console.log('is instructor response', res)
//             return res.data.instructor;
//         }
//     })
//     return [isInstructor, isInstructorLoading]