import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();

    const { data: menu = [], isPending: loader, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosPublic('/menu');
            return data;
        }
    })
    return { menu, loader, refetch }
};

export default useMenu;