import { useQuery } from "@tanstack/react-query"
import { getTodosIds } from "./todo.service"

export const useTodosIds = () => {

    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds
    })
}